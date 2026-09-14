#!/usr/bin/env python3
"""Local preview server for Auggie Comics (development only).
- Serves the site as plain static files, never cached, so every reload picks up the latest JavaScript.
- POST /__snap?name=file.png saves a rendered page image into the snapshot folder (argv[2]),
  so pages can be reviewed as images by the QC tool (tools/qc.js → AuggiQC.snap)."""
import http.server, socketserver, sys, os, re
from urllib.parse import urlparse, parse_qs

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8765
SNAPS = sys.argv[2] if len(sys.argv) > 2 else os.path.join(os.path.dirname(__file__), '.snaps')

class Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, max-age=0')
        super().end_headers()
    def log_message(self, *a):
        pass
    def do_POST(self):
        u = urlparse(self.path)
        if u.path != '/__snap' or self.client_address[0] not in ('127.0.0.1', '::1'):
            self.send_error(404); return
        name = re.sub(r'[^A-Za-z0-9_.-]', '_', parse_qs(u.query).get('name', ['snap.png'])[0])[:80]
        size = int(self.headers.get('Content-Length', 0))
        if size <= 0 or size > 20_000_000:
            self.send_error(400); return
        os.makedirs(SNAPS, exist_ok=True)
        with open(os.path.join(SNAPS, name), 'wb') as f:
            f.write(self.rfile.read(size))
        self.send_response(204); self.end_headers()

socketserver.TCPServer.allow_reuse_address = True
with socketserver.TCPServer(('', PORT), Handler) as httpd:
    print(f'Serving on http://localhost:{PORT} (snapshots → {SNAPS})', flush=True)
    httpd.serve_forever()

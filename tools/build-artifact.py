#!/usr/bin/env python3
"""Builds dist/auggi-comics.html: index.html without the <html>/<head>/<body> wrapper,
for hosts (like Claude Artifacts) that supply their own document skeleton."""
import pathlib, re

root = pathlib.Path(__file__).resolve().parent.parent
src = (root / "index.html").read_text(encoding="utf-8")
head = re.search(r"<head>(.*?)</head>", src, re.S).group(1)
body = re.search(r"<body>(.*?)</body>", src, re.S).group(1)
head = re.sub(r'\s*<meta (charset|name="viewport")[^>]*>', "", head)
out = root / "dist" / "auggi-comics.html"
out.parent.mkdir(exist_ok=True)
out.write_text(head.strip() + "\n" + body.strip() + "\n", encoding="utf-8")
print("wrote", out.relative_to(root))

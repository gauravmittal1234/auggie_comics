/* Auggie Comics — privacy-friendly visit counting with GoatCounter (https://www.goatcounter.com).
   No cookies, no personal data, nothing per child: only counts of pages and actions (which comics are read,
   language, PDF downloads…). Search text is never sent. Browsers with "Do Not Track" or Global Privacy Control
   switched on are not counted at all.

   Set CODE to your GoatCounter site code (the part before .goatcounter.com). Empty = counting is off.
   Add ?stats=debug to the address to see the events in the browser console instead of sending them. */
(function () {
  const CODE = 'auggiecomics';

  const S = (window.AuggiStats = { page() {}, event() {}, log: [] });
  const debug = /[?&]stats=debug\b/.test(location.search);
  let lastPath = null;

  if (debug) {
    S.page = (path, title) => { if (path === lastPath) return; lastPath = path; S.log.push(['page', path, title]); console.info('[stats] page', path, title || ''); };
    S.event = (name, title) => { S.log.push(['event', name, title]); console.info('[stats] event', name, title || ''); };
    return;
  }
  const local = /^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname) || location.protocol === 'file:';
  const optedOut = navigator.doNotTrack === '1' || window.doNotTrack === '1' || navigator.globalPrivacyControl === true;
  if (!CODE || local || optedOut) return;

  const endpoint = `https://${CODE}.goatcounter.com/count`;
  // no_onload: this is a one-page app, so pages are counted by the app itself as readers move around
  window.goatcounter = { no_onload: true, no_events: true, endpoint };
  const queue = [];
  const send = o => { const gc = window.goatcounter; if (gc && typeof gc.count === 'function') gc.count(o); else queue.push(o); };
  const s = document.createElement('script');
  s.async = true;
  s.src = 'https://gc.zgo.at/count.js';
  s.setAttribute('data-goatcounter', endpoint);
  s.onload = () => { while (queue.length) send(queue.shift()); };
  document.head.appendChild(s);

  S.page = (path, title) => { if (path === lastPath) return; lastPath = path; send({ path, title: title || path }); };
  S.event = (name, title) => send({ path: name, title: title || name, event: true });
})();

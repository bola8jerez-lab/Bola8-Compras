const CACHE = "bola8-compras-v8";
const CORE = ["./", "./index.html", "./manifest.webmanifest", "./icon.svg"];
self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith("bola8-compras-") && key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;
  event.respondWith((async () => {
    const isPage = event.request.mode === "navigate" || url.pathname.endsWith(".html") || url.pathname.endsWith("/");
    if (isPage) {
      try {
        const response = await fetch(event.request, {cache:"no-store"});
        if (response.ok) {
          const copy = response.clone();
          caches.open(CACHE).then(cache => cache.put(event.request, copy));
        }
        return response;
      } catch {
        return (await caches.match(event.request)) || caches.match("./index.html");
      }
    }
    const cached = await caches.match(event.request);
    if (cached) return cached;
    return fetch(event.request);
  })());
});
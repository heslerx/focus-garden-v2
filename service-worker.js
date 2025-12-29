const CACHE_NAME = "focus-garden-v2";

const ASSETS = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./manifest.json",
  "./focus_bg.png",
  "./success_chime.mp3",
  "./purchase.mp3",
  "./plant_1.png",
  "./plant_2.png",
  "./plant_3.png",
  "./plant_4.png",
  "./plant_5.png",
  "./plant_6.png",
  "./plant_7.png",
  "./plant_8.png",
  "./plant_9.png",
  "./plant_10.png",
  "./trophy_10.png",
  "./trophy_50.png",
  "./trophy_100.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
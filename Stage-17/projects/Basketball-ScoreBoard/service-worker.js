const CACHE_NAME = "bballscore-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/index.css",
  "/index.js",
  "/manifest.json",
  "/img/icon-192x192.png",
  "/img/icon-512x512.png",
  "/img/juego-baloncesto-cancha-madera-deportiva_18591-51439.jpg",
  "/offline.html"
];

// Service Worker installation
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log("[Service Worker] Caching all resources");
      return cache.addAll(urlsToCache);
    })
  );
});

// Activate and Clean old cache
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log("[Service Worker] Deleting old cache:", cache);
            return caches.delete(cache);
          }
        })
      )
    )
  );
});

// Intercept Requests
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        console.log("[Service Worker] Serving from cache:", event.request.url);
        return response;
      }
      return fetch(event.request).catch(error => {
        console.error("[Service Worker] Fetch failed; returning offline page:", error);
        return caches.match("/offline.html");
      });
    })
  );
});

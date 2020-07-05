const CACHE_NAME = 'firstpwa-v2';
var urlsToCache = [
  "/",
  "/nav.html",
  "/index.html",
  "/pages/home.html",
  "/pages/about.html",
  "/pages/contact.html",
  "/pages/profile.html",
  "/pages/connection.html",
  "/css/materialize.min.css",
  "/css/signal.css",
  "/js/materialize.js",
  "/js/nav.js",
  "/js/signal.js",
  "/images/badge-css.png",
  "/images/badge-html.png",
  "/images/badge-js.png",
  "/images/badge-python.png",
  "/images/badge-udacity.png",
  "/images/komputer-min.jpg",
  "/images/laptop-min.jpg",
  "/images/sparepart-min.jpg",
  "/images/service-min.jpg",
  "/images/profile-owner.jpg",
];
 
self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches
      .match(event.request, { cacheName: CACHE_NAME })
      .then(function(response) {
        if (response) {
          console.log("ServiceWorker: Gunakan aset dari cache: ", response.url);
          return response;
        }
 
        console.log(
          "ServiceWorker: Memuat aset dari server: ",
          event.request.url
        );
        return fetch(event.request);
      })
  );
});

self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName != CACHE_NAME) {
            console.log("ServiceWorker: cache " + cacheName + " dihapus");
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
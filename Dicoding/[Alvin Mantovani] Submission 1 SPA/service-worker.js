const CACHE_NAME = 'pwa-project-v2';
var urlsToCache = [
  "/",
  "/nav.html",
  "/index.html",
  "/manifest.json",
  "/pages/home.html",
  "/pages/about.html",
  "/pages/contact.html",
  "/pages/profile.html",
  "/pages/connection.html",
  "/css/materialize.min.css",
  "/css/signal.css",
  "/js/materialize.min.js",
  "/js/nav.js",
  "/js/signal.js",
  "/register-service.js",
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
  "/images/icons/favicon.ico",
  "/images/icons/icon-72x72.png",
  "/images/icons/icon-96x96.png",
  "/images/icons/icon-128x128.png",
  "/images/icons/icon-144x144.png",
  "/images/icons/icon-152x152.png",
  "/images/icons/icon-192x192.png",
  "/images/icons/icon-384x384.png",
  "/images/icons/icon-512x512.png",
  "/images/icons/safari-pinned-tab.svg",
  "/images/screen/ipad-landscape-min.png",
  "/images/screen/ipad-portrait-min.png",
  "/images/screen/iphone4orlower-min.png",
  "/images/screen/iphone5-min.png",
  "/images/screen/iphone6-min.png",
  "/images/screen/iphone6plus-min.png",
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
//CACHE ONLY
self.addEventListener('fetch', function(event) {  event.respondWith(caches.match(event.request)); });

//NETWORK ONLY
self.addEventListener('fetch', function(event) {  event.respondWith(fetch(event.request)); });

//CACHE FIRST (CACHE FALLBACK TO NETWORK)
self.addEventListener('fetch', function(event) {
  event.respondWith( caches.match(event.request).then(function(response) {  return response || fetch(event.request); }));
});

//NETWORK FIRST (NETWORK FALLBACK TO CACHE)
self.addEventListener('fetch', function(event) {
  event.respondWith(fetch(event.request).catch(function() {  return caches.match(event.request); })
  );
});

// Stale While Revalidate
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open('mysite-dynamic').then(function(cache) {
      return cache.match(event.request).then(function(response) {
        var fetchPromise = fetch(event.request).then(function(networkResponse) {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        })
        return response || fetchPromise;
      })
    })
  );
});
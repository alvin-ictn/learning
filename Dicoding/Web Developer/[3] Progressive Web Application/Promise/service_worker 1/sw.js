self.addEventListener('install', function(event){
  // Kode proses instalasi
});

self.addEventListener('activate', function(event){
// Kode proses aktivasi
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
  );
});

self.addEventListener('sync', function(event) {
  if (event.tag === 'foo') {
    event.waitUntil(doSomething());
  }
});

// var options = {...}
self.addEventListener('push', function(event) {
  event.waitUntil(
    self.registration.showNotification('Halo Coder!', options)
  );
});
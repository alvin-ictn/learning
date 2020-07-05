if (!("serviceWorker" in navigator)) {
  console.log("Service worker tidak didukung.");
} else {
  navigator.serviceWorker.register("/sw.js").then(function(registration) {
    console.log("Service terdaftar.");
  });
}

navigator.serviceWorker.register('/sw.js');
navigator.serviceWorker.ready.then(function(swRegistration) {
  return swRegistration.sync.register('foo');
});
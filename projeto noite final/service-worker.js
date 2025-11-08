self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("sentimentometro-v1").then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
        "/manifest.json",
        "/service-worker.js",
        "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css",
        "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});

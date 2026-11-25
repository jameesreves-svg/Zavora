const CACHE_NAME = "zavora-v1";

self.addEventListener("install", function(event) {
    self.skipWaiting();
});

self.addEventListener("activate", function(event) {
    event.waitUntil(
        clients.claim()
    );
});

self.addEventListener("fetch", function(event) {
    if (event.request.method !== "GET") return;

    event.respondWith(
        fetch(event.request).then(function(response) {
            if (response.ok && new URL(event.request.url).origin === self.location.origin) {
                const copy = response.clone();

                caches.open(CACHE_NAME).then(function(cache) {
                    cache.put(event.request, copy);
                });
            }

            return response;
        }).catch(function() {
            return caches.match(event.request);
        })
    );
});
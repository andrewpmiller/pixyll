---
layout: null
---
var CACHE_NAME = "pixyll-v" + "{{ site.time | date: '%Y%m%d%H%M' }}";

self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll([
        "{{ '/css/pixyll.css' | relative_url }}?{{ site.time | date: '%Y%m%d%H%M' }}",
        "{{ '/' | relative_url }}",
        "{{ '/index.html' | relative_url }}"
      ]);
    })
  );
});

self.addEventListener("activate", function(e) {
  e.waitUntil(
    caches.keys().then(function(names) {
      return Promise.all(
        names.map(function(name) {
          if (name != CACHE_NAME) {
            return caches.delete(name);
          }
        })
      );
    })
  );
  return clients.claim();
});

self.addEventListener("fetch", function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request).then(function(response) {
        var clonedResponse = response.clone();
        var hosts = [
          "https://fonts.googleapis.com",
          "https://fonts.gstatic.com",
          "https://maxcdn.bootstrapcdn.com",
          "https://cdnjs.cloudflare.com"
        ];
        
        for (var i = 0; i < hosts.length; i++) {
          if (e.request.url.indexOf(hosts[i]) === 0) {
            caches.open(CACHE_NAME).then(function(cache) {
              cache.put(e.request, clonedResponse);
            });
            break;
          }
        }
        return response;
      });
    })
  );
});

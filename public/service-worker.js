var doCache = true;
var CACHE_NAME = 'react-app-cache';

// Очищает старый кэш
self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys()
            .then(keyList =>
                Promise.all(keyList.map(key => {
                    if (!cacheWhitelist.includes(key)) {
                        console.log('Deleting cache: ' + key);
                        return caches.delete(key);
                    }
                }))
            )
    );
});

// 'install' вызывается, как только пользователь впервые открывает PWA
self.addEventListener('install', function (event) {
    if (doCache) {
        event.waitUntil(
            caches.open(CACHE_NAME)
                .then(function (cache) {
                    fetch('/manifest.json')
                        .then(response => {
                            response.json()
                        })
                        .then(assets => {
                            const urlsToCache = [
                                '',
                                '/chats/*',
                                '/news',
                            ];
                            cache.addAll(urlsToCache);
                            console.log('cached');
                        })
                })
        );
    }
});

self.addEventListener('fetch', function (event) {
    if (doCache) {
        event.respondWith(
            caches.match(event.request).then(function (response) {
                return response || fetch(event.request);
            })
        );
    }
});
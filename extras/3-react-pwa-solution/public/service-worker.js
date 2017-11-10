const CACHE_NAME = 'dogs-v1'
const CACHE_FILES = [
    './',
    './bundle.js',
    './styles.css'
]

self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            console.log('caching...')
            return cache.addAll(CACHE_FILES)
        }).catch(function (err) {
            console.log(err)
        })
    )
})

self.addEventListener('activate', function(e) {
    console.log('activating...', e)
})

self.addEventListener('fetch', function(e) {
    console.log('fetching...', e.request)
    e.respondWith(
        caches.match(e.request).then(function(response){
            if (response) {
                return response
            }

            var requestClone = e.request.clone()

            return fetch(requestClone).then(function (res){
                if (!res || res.status !== 200 || res.type !== 'basic'){
                    return res
                }

                var resClone = res.clone()

                caches.open(CACHE_NAME).then(function(cache) {
                    cache.put(e.request, resClone)
                })

                return response
            })
        })
    )
})
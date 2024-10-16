/**
 * Service Worker
 * @author joão vitor souto 
 */

// instalação do ServiceWorker
self.addEventListener('install', (event) => {
    console.log("Instalando o ServiceWorker...", event)
    // Pré carregamento em cache
    event.waitUntil(
        caches.open('static')
        .then((cache) => {
            console.log("Pré carregamento dos arquivos do app")
            cache.add('/')
            cache.add('/index.html')
            cache.add('/style.css')
            cache.add('/app.js')
            cache.add('/img/flex.png')
            cache.add('/img/calcflex.png')
            cache.add('/img/etanol.png')
            cache.add('/img/gasolina.png')
        })
    )
})


// ativação do ServiceWorker
self.addEventListener('activate', (event) => {
    console.log("Ativando o ServiceWorker...", event)
    return self.clients.claim() // garatir o serviço em todos os docs do app
})


// Escultando requisições "buscando algo"
self.addEventListener('fetch', (event) => {
   // console.log("Buscando algo...", event)
   // armazenar em cache em todas as requisiçoes 
   event.respondWith(
     caches.match(event.request)
     .then((response) => {
        if (response) {
            return response
        } else {
            return fetch(event.request)
        }
     })
   )
})

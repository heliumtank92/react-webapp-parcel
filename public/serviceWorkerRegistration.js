if (navigator.serviceWorker) {
  console.log('import.meta.url', import.meta.url)
  navigator.serviceWorker.register(new URL('service-worker.js', import.meta.url), { type: 'module' }).then(function (registration) {
    console.log('ServiceWorker registration successful with scope:', registration)
  }).catch(function (error) {
    console.log('ServiceWorker registration failed:', error)
  })
}

(function () {
  if (!navigator.serviceWorker) {
    console.error('[simple-transformer-service] ServiceWorker is not supported.');
    return;
  }

  navigator.serviceWorker.register(
    './simple-transformer-service-worker.js',
    {
      scope: ''
    }
  ).then(function () {
    console.log('[simple-transformer-service] ServiceWorker registered.') 
  }).catch(function (error) {
    console.error('[simple-transformer-service]', error);
  });
})();

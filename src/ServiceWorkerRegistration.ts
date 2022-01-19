export function register(sw: string) {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register(sw)
      .then((reg: ServiceWorkerRegistration) => {
        console.log('Registered serviceworker with scope ' + reg.scope);
      })
      .catch((e: Error) => {
        console.error('Could not register serviceworker > ', e);
      });
  }
}

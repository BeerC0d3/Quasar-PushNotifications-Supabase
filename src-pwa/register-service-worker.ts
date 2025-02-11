import { register } from 'register-service-worker';
// import { Notify } from 'quasar';

// The ready(), registered(), cached(), updatefound() and updated()
// events passes a ServiceWorkerRegistration instance in their arguments.
// ServiceWorkerRegistration: https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration

register('firebase-messaging-sw.js', {
  registrationOptions: {
    scope: './',
  },
  // The registrationOptions object will be passed as the second argument
  // to ServiceWorkerContainer.register()
  // https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/register#Parameter

  // registrationOptions: { scope: './' },

  ready(/* registration */) {
    console.log('Service worker is active quasar.');
  },

  registered(/* registration */) {
    // console.log('Service worker has been registered.')
  },

  cached(/* registration */) {
    // console.log('Content has been cached for offline use.')
  },

  updatefound(/* registration */) {
    // console.log('New content is downloading.')
  },

  updated(/* registration */) {
    console.log('New content is available; please refresh.');
    // Notify.create({
    //   message: 'Nueva version disponible',
    //   icon: 'fa-solid fa-cloud-arrow-down',
    //   closeBtn: 'Actualizar',
    //   timeout: 10000,
    //   onDismiss() {
    //     location.reload();
    //   },
    // });
  },

  offline() {
    // console.log('No internet connection found. App is running in offline mode.')
  },

  error(/* err */) {
    // console.error('Error during service worker registration:', err)
  },
});

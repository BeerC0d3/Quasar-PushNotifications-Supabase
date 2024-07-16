importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts(
  'https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js'
);

try {
  firebase.initializeApp({
    apiKey: 'AIzaSyCtjUUTiGQ85sNVR_TyuJKyDtUJVnoD3WM',
    authDomain: 'cloud-messaging-15055.firebaseapp.com',
    projectId: 'cloud-messaging-15055',
    storageBucket: 'cloud-messaging-15055.appspot.com',
    messagingSenderId: '44323951553',
    appId: '1:44323951553:web:878bdfdc0df94b3c4b9540',
    measurementId: 'G-GMNT8KCTW2',
  });

  const messaging = firebase.messaging();

  messaging.onBackgroundMessage((payload) => {
    console.log(
      '[firebase-messaging-sw.js] Received background message ',
      payload
    );
    // Customize notification here
    // const notificationTitle = 'Background Message Title';
    const notificationOptions = {
      body: payload.notification.body,
      icon: '/firebase-logo.png',
    };
    self.registration.showNotification(
      payload.notification.title,
      notificationOptions
    );
  });
} catch (err) {
  console.log(err);
}

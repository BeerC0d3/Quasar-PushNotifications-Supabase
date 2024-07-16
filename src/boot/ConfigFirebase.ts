import { boot } from 'quasar/wrappers';
import { initializeApp, FirebaseOptions } from 'firebase/app';
import { fcmKey } from '../firebase/keys';

export default boot(({ app }) => {
  const config: FirebaseOptions = {
    apiKey: fcmKey.apiKey,
    authDomain: fcmKey.authDomain,
    projectId: fcmKey.projectId,
    storageBucket: fcmKey.storageBucket,
    messagingSenderId: fcmKey.messagingSenderId,
    appId: fcmKey.appId,
    measurementId: fcmKey.measurementId,
  };
  const firebaseapp = initializeApp(config);
  app.config.globalProperties.$fbInit = firebaseapp;
  app.provide('fbInit', firebaseapp);
});

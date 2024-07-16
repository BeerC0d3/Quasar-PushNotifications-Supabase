import { FirebaseApp } from 'firebase/app';
import { getMessaging, getToken } from 'firebase/messaging';
import { inject } from 'vue';
import { useTokenStore } from 'src/stores/all';

export default function useFirebase() {
  const fbInitApp = inject('fbInit');

  const setRegistrationToken = (): void => {
    const $tokenStore = useTokenStore();

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('firebase-messaging-sw.js', {
          scope: 'firebase-cloud-messaging-push-scope',
        })
        .then(() => {
          Notification.requestPermission()
            .then(() => {
              const messaging = getMessaging(<FirebaseApp>fbInitApp);
              getToken(messaging)
                .then((currentToken) => {
                  //We save token in store here
                  // store.commit('auth/SET_FIREBASE_REG_TOKEN', currentToken);
                  console.log('token=> ' + currentToken);
                  $tokenStore.setTokenMessaging(currentToken);
                })
                .catch((err) => {
                  console.log(
                    'An error occurred while retrieving  token. ',
                    err
                  );
                  $tokenStore.setErrorToken(
                    'An error occurred while retrieving  token.=> ' +
                      err.toString()
                  );
                });
            })
            .catch((e) => {
              console.log(e);
              $tokenStore.setErrorToken('requestPermission=> ' + e.toString());
            });
        })
        .catch((err) => {
          console.log(err);
          $tokenStore.setErrorToken('setRegistrationToken=> ' + err.toString());
        });
    }
  };
  return { setRegistrationToken };
}

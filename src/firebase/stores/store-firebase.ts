import { defineStore } from 'pinia';

interface firebaseState {
  tokenMessaging: string;
  error: string;
}

export const tokenStore = defineStore('firebase', {
  state: (): firebaseState => ({
    tokenMessaging: '',
    error: '',
  }),
  getters: {
    getTokenMessaging: (state) => state.tokenMessaging,
    getErrorToken: (state) => state.error,
  },
  actions: {
    setTokenMessaging(token: string) {
      this.tokenMessaging = token;
    },
    setErrorToken(error: string) {
      this.error = error;
    },
  },
});

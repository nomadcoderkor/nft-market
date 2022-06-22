import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    authAccount: '0x',
  }),
  getters: {
    getAuthAccount: (state) => state.authAccount,
  },
  actions: {
    setAuthAccount(v) {
      this.authAccount = v;
    },
  },
  persist: true,
});

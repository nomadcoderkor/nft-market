<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex bg-image flex-center">
        <q-card
          :style="$q.screen.lt.sm ? { width: '80%' } : { width: '30%' }"
        >
          <q-card-section>
            <q-avatar
              size="103px"
              class="absolute-center shadow-10"
            >
              <img src="metamask.svg">
            </q-avatar>
          </q-card-section>
          <q-card-section>
            <div class="text-center q-pt-lg">
              <div class="col text-h6 ellipsis">
                Meta Mask Login
              </div>
              <q-btn
                v-if="isMetamaskSupported"
                label="Meta Mask Login"
                type="button"
                color="primary"
                style="margin-top: 30px"
                @click="onLogin"
              />
            </div>
          </q-card-section>
          <q-card-section />
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import {
  defineComponent, getCurrentInstance, onMounted, ref,
} from 'vue';
// import { login } from '@api/api';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@store/auth-store';

export default defineComponent({
  setup() {
    const router = useRouter();
    const { authAccount, setAuthAccount } = useAuthStore();
    const { proxy } = getCurrentInstance();
    const { $ethereum } = proxy;
    const isMetamaskSupported = ref(false);
    onMounted(() => {
      isMetamaskSupported.value = typeof $ethereum !== 'undefined';
    });

    const onLogin = async () => {
      const accounts = await $ethereum.request({ method: 'eth_requestAccounts' });
      setAuthAccount(accounts[0]);
    };
    return {
      isMetamaskSupported,
      onLogin,
    };
  },
});
</script>

<style>
.bg-image {
  background-image: linear-gradient(135deg, #7028e4 0%, #e5b2ca 100%);
}
</style>

<template>
  <q-page class="q-pa-sm">
    <div
      class="q-pa-md"
      style="max-width: 400px"
    >
      <q-form
        class="q-gutter-md"
        @submit="onSubmit"
        @reset="onReset"
      >
        <q-input
          v-model="name"
          filled
          label="Your name *"
          hint="Name and surname"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />

        <q-input
          v-model="age"
          filled
          type="number"
          label="Your age *"
          lazy-rules
          :rules="[
            val => val !== null && val !== '' || 'Please type your age',
            val => val > 0 && val < 100 || 'Please type a real age'
          ]"
        />

        <q-toggle
          v-model="accept"
          label="I accept the license and terms"
        />

        <div>
          <q-btn
            label="Minting"
            type="submit"
            color="primary"
          />
          <q-btn
            label="Reset"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MintNft',
  setup() {
    return {
    };
  },
});
</script>

<style scoped>

</style>

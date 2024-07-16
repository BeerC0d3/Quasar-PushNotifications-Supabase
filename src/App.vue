<template>
  <router-view />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import useFirebase from '../src/firebase/composables/useFCM';

const { setRegistrationToken } = useFirebase();
// const { setRegistrationToken } = useFCM();
// defineOptions({
//   name: 'App',
// });
onMounted(() => {
  setRegistrationToken();
});
</script>

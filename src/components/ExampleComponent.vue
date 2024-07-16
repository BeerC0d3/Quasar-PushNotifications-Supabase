<template>
  <div>
    <p>{{ title }}</p>
    <ul>
      <li v-for="todo in todos" :key="todo.id" @click="increment">
        {{ todo.id }} - {{ todo.content }}
      </li>
    </ul>
    <p>Count: {{ todoCount }} / {{ meta.totalCount }}</p>
    <p>Active: {{ active ? 'yes' : 'no' }}</p>
    <p>Clicks on todos: {{ clickCount }}</p>
    <p>token: {{ token }}</p>
    <p>Error: {{ error }}</p>
    <p class="text-center">
      <q-btn color="secondary" label="copiar token" @click="copyToken" />
    </p>
    <p class="text-center">
      <q-btn color="primary" label="Permiso Push" @click="getPermission" />
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { Todo, Meta } from './models';
import { useTokenStore } from 'src/stores/all';
import useFirebase from '../firebase/composables/useFCM';

const $tokenStore = useTokenStore();
const { setRegistrationToken } = useFirebase();

const token = ref('');
const error = ref('');
interface Props {
  title: string;
  todos?: Todo[];
  meta: Meta;
  active: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  todos: () => [],
});

const clickCount = ref(0);
function increment() {
  clickCount.value += 1;
  return clickCount.value;
}

const copyToken = () => {
  navigator.clipboard.writeText(token.value);
};
const getPermission = () => {
  setRegistrationToken();
};

const todoCount = computed(() => props.todos.length);
token.value = $tokenStore.getTokenMessaging;
error.value = $tokenStore.getErrorToken;
</script>

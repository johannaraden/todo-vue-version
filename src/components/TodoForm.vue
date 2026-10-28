<script setup lang="ts">
import { Todo } from "../types/todo";

const props = defineProps<{
  todo: Todo;
}>();
</script>

<template>
  <div class="app">
    <input type="string" v-model="props.todo.text" />
  </div>
</template>

<style scoped></style>

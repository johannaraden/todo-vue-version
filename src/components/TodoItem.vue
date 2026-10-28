<script setup lang="ts">
import { Todo } from "../types/todo";

const props = defineProps<{
  todo: Todo;
}>();
</script>

<template>
  <div class="app">
    <p>Todo Item</p>
    <p>{{ props.todo.text }}</p>
  </div>
</template>

<style scoped></style>

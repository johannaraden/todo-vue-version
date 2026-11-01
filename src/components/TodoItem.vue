<script setup lang="ts">
import type { Todo } from "../types/todo";
import { useTodoStore } from "@/stores/todoStore";

const props = defineProps<{
  todo: Todo;
}>();
const todoStore = useTodoStore();
</script>

<template>
  <div class="app">
    <input
      type="checkbox"
      :checked="props.todo.completed"
      @change="todoStore.toggleTodo(props.todo.id)"
    />
    <p>{{ props.todo.text }}</p>
  </div>
</template>
<style scoped></style>

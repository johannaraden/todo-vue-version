<script setup lang="ts">
import type { Todo } from "../types/todo";
import { useTodoStore } from "@/stores/todoStore";

const props = defineProps<{
  todo: Todo;
}>();
const todoStore = useTodoStore();
</script>

<template>
  <div class="todo-card" :class="{ completed: todo.completed }">
    <input type="checkbox" :checked="todo.completed" @change="todoStore.toggleTodo(todo.id)" />

    <p class="todo-text">{{ todo.text }}</p>
  </div>
</template>
<style scoped></style>

<script setup lang="ts">
import TodoItem from "./TodoItem.vue";
import { useTodoStore } from "@/stores/todoStore";

const todoStore = useTodoStore();
</script>

<template>
  <section class="todo-grid">
    <div v-if="todoStore.todos.length" class="todo-grid__items">
      <TodoItem v-for="todo in todoStore.todos" :key="todo.id" :todo="todo" />
    </div>
  </section>
</template>

<style scoped>
.todo-grid {
  display: grid;
  gap: 1.5rem;
}

.todo-grid__items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  gap: 1rem;
}
</style>

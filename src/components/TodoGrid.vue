<script setup>
import { ref } from "vue";
import TodoForm from "./TodoForm.vue";
import TodoItem from "./TodoItem.vue";
import { useTodoStore } from "@/stores/todoStore";

const todoStore = useTodoStore();

function addTodo(todo) {
  const text = typeof todo === "string" ? todo.trim() : (todo?.text ?? todo?.title ?? "").trim();
  if (!text) return;

  todos.value.push({
    ...(typeof todo === "object" && todo !== null ? todo : {}),
    id: `${Date.now()}-${Math.random()}`,
    text,
  });
}
</script>

<template>
  <section class="todo-grid">
    // Add the Todo Form component to allow users to add their todods
    <TodoForm @add-todo="addTodo" />

    // Grid of created todo items
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

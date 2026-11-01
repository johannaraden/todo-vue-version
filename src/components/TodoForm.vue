<script setup lang="ts">
import { ref } from "vue";
import { useTodoStore } from "@/stores/todoStore";

const todoStore = useTodoStore();
const newTodo = ref("");
function handleSubmit() {
  const text = newTodo.value.trim();

  if (!text) return;

  todoStore.addTodo(text);
  newTodo.value = "";
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" v-model="newTodo" placeholder="Add a new task..." />
    <button type="submit">Add Todo</button>
  </form>
</template>

<style scoped></style>

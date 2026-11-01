<script setup lang="ts">
import Header from "./components/Header.vue";
import TodoForm from "./components/TodoForm.vue";
import TodoGrid from "./components/TodoGrid.vue";
import { useTodoStore } from "./stores/todoStore";
import { storeToRefs } from "pinia";
const todoStore = useTodoStore();
const { tasksDone, totalTasks } = storeToRefs(todoStore);
</script>

<template>
  <div class="app">
    <Header :tasksDone="tasksDone" :totalTasks="totalTasks" />
    <TodoForm />
    <TodoGrid />
  </div>
</template>

<style scoped></style>

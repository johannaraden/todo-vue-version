<script setup lang="ts">
import Header from "./components/Header.vue";
import { useTodoStore } from "./stores/todoStore";
const { tasksDone, totalTasks } = useTodoStore();
</script>

<template>
  <div class="app">
    <Header :tasksDone="tasksDone" :totalTasks="totalTasks" />
    <TodoGrid />
  </div>
</template>

<style scoped></style>

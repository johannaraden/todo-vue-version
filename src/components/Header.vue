<script setup lang="ts">
const props = defineProps<{
  tasksDone: number;
  totalTasks: number;
}>();
</script>

<template>
  <header class="header">
    <h1>My tasks</h1>

    <div class="task-overview">
      <p class="summary">You have completed {{ tasksDone }} of {{ totalTasks }} tasks!</p>
    </div>
  </header>
</template>

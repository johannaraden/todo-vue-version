<script setup lang="ts">
import { ref, computed } from "vue";
import TodoItem from "./TodoItem.vue";
import { useTodoStore } from "@/stores/todoStore";

const todoStore = useTodoStore();

const filter = ref<"all" | "active">("all");

const visibleTodos = computed(() => {
  if (filter.value === "active") {
    return todoStore.todos.filter((todo) => !todo.completed);
  }

  return todoStore.todos;
});
</script>

<template>
  <section class="todo-section">
    <div class="todo-toolbar">
      <h2>Your tasks</h2>

      <div class="filter-toggle">
        <button
          :class="{ selected: filter === 'all' }"
          :aria-pressed="filter === 'all'"
          @click="filter = 'all'"
        >
          All tasks
        </button>

        <button
          :class="{ selected: filter === 'active' }"
          :aria-pressed="filter === 'active'"
          @click="filter = 'active'"
        >
          To do
        </button>
      </div>
    </div>

    <div v-if="visibleTodos.length" class="todo-list">
      <TodoItem v-for="todo in visibleTodos" :key="todo.id" :todo="todo" />
    </div>

    <p v-else class="empty-message">
      {{
        filter === "active" ? "You have completed all your tasks!" : "No tasks yet. Add one above!"
      }}
    </p>
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

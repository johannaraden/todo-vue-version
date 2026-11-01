import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type { Todo } from "../types/todo";

export const useTodoStore = defineStore("todos", () => {
  const todos = ref<Todo[]>([]);

  const tasksDone = computed(() => todos.value.filter((todo) => todo.completed).length);

  const totalTasks = computed(() => todos.value.length);

  function addTodo(text: string) {
    const trimmedText = text.trim();

    if (!trimmedText) return;

    todos.value.push({
      id: Date.now(),
      text: trimmedText,
      category: "",
      completed: false,
      dueDate: new Date(),
    });
  }

  function toggleTodo(id: number) {
    const todo = todos.value.find((todo) => todo.id === id);

    if (todo) {
      todo.completed = !todo.completed;
    }
  }

  function deleteTodo(id: number) {
    todos.value = todos.value.filter((todo) => todo.id !== id);
  }

  function clearCompleted() {
    todos.value = todos.value.filter((todo) => !todo.completed);
  }

  function clearAll() {
    todos.value = [];
  }

  return {
    todos,
    tasksDone,
    totalTasks,
    addTodo,
    toggleTodo,
    deleteTodo,
    clearCompleted,
    clearAll,
  };
});

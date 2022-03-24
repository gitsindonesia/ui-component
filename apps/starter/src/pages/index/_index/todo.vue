<script setup lang="ts">
import {ref} from 'vue';

interface Todo {
  text: string;
  isCompleted: boolean;
}

const todos = ref<Todo[]>([
  {
    text: 'Setup server',
    isCompleted: false,
  },
  {
    text: 'Deploy application',
    isCompleted: false,
  },
]);

const newTodo = ref('');
const todoInput = ref<HTMLInputElement | null>(null);

const addNewTodo = () => {
  if (!newTodo.value) {
    todoInput.value?.focus();
    return;
  }

  todos.value.unshift({
    text: newTodo.value,
    isCompleted: false,
  });
  newTodo.value = '';
};
</script>

<template>
  <div
    class="
      container
      mx-auto
      h-screen
      flex
      items-center
      justify-center
      text-center
    "
  >
    <div class="grid sm:gap-y-6 w-full sm:w-6/12">
      <h1 class="text-2xl font-bold">To-Do List</h1>

      <input
        v-model="newTodo"
        placeholder="Type and enter to add new..."
        ref="todoInput"
        class="px-4 py-3 border rounded w-full"
        @keydown.enter="addNewTodo"
      />

      <div class="grid gap-y-1">
        <div
          class="
            text-left
            flex
            justify-between
            hover:bg-gray-100
            px-4
            py-2
            rounded
          "
          v-for="(todo, index) in todos"
          :key="index"
          @click="todo.isCompleted = !todo.isCompleted"
        >
          <span class="select-none" :class="{'line-through': todo.isCompleted}">
            {{ todo.text }}
          </span>
          <v-checkbox :id="`todo${index}`" v-model="todo.isCompleted" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
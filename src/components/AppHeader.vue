<script lang="ts" setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="fixed top-0 w-full z-40 bg-gray-50">
    <div class="container">
      <div class="py-5 flex items-center justify-between">
        <RouterLink
          to="/"
          class="font-bold"
        >
          Simple To Do App
        </RouterLink>
        <nav class="flex items-center">
          <RouterLink
            to="/"
            class="hover:text-gray-600 mr-4 font-medium"
          >
            Главная
          </RouterLink>
          <RouterLink
            to="/todo"
            class="hover:text-gray-600 font-medium"
          >
            Задачи
          </RouterLink>
        </nav>
      </div>
    </div>
  </header>
</template>

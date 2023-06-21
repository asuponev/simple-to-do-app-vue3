<script lang="ts" setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <div class="container">
      <div class="py-5 flex items-center justify-between">
        <div class="font-bold">Simple To Do App</div>
        <nav class="flex items-center">
          <RouterLink
            to="/"
            class="text-sky-600 hover:text-sky-800 mr-4"
          >
            Главная
          </RouterLink>
          <RouterLink
            to="/todo"
            class="text-sky-600 hover:text-sky-800"
          >
            Задачи
          </RouterLink>
        </nav>
      </div>
    </div>
  </header>
</template>

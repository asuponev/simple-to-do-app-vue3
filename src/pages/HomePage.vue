<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <main class="flex items-center justify-center">
    <div class="container">
      <div class="flex flex-col items-center justify-center">
        <h1 class="font-bold">Добро пожаловать на сайт Simple To Do App!</h1>
        <p class="my-5">
          На странице Задачи вы сможете создавать свои задачи и управлять ими
        </p>
        <RouterLink
            to="/todo"
            class="text-sky-600 hover:text-sky-800 mr-4"
          >
            Перейти на страницу Задачи
          </RouterLink>
      </div>
    </div>
  </main>
</template>

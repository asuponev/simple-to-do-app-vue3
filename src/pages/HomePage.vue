<script setup lang="ts">
import UIButton from '@/components/UIButton.vue';
</script>

<template>
  <main class="flex items-center justify-center mt-16">
    <div class="container max-w-2xl">
      <div class="flex flex-col items-center justify-center">
        <h1 class="font-bold text-center text-xl">
          Добро пожаловать на сайт Simple To Do App!
        </h1>
        <p class="my-5 text-center">
          На странице Задачи вы сможете создавать свои задачи. Добавленные
          задачи сохраняются в хранилище браузера, поэтому вы можете управлять
          ими после обновления страницы.
        </p>
        <UIButton @click="$router.push('/todo')">Добавить задачи</UIButton>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
</script>

<template>
  <AppHeader />
  <RouterView />
  <AppFooter />
</template>

<style>
#app {
  @apply flex min-h-screen flex-col;
}

header,
footer {
  @apply shrink-0 grow-0;
}

main {
  @apply grow;
}

.container {
  @apply mx-auto max-w-[1440px] px-5;
}
</style>

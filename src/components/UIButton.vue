<script lang="ts" setup>
defineProps<{
  submitBtn?: boolean
}>()
</script>

<template>
  <button
    :type="submitBtn ? 'submit' : 'button'"
    class="bg-blue-500 w-40 px-4 py-3 rounded text-white hover:bg-blue-600 transition-colors duration-200 outline-none"
  >
    <slot />
  </button>
</template>

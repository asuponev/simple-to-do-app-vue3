<script lang="ts" setup>
import { ref } from 'vue'
import { useTodoStore } from '@/store'
import UIButton from '@/components/UIButton.vue';

const todoStore = useTodoStore()

const taskText = ref('')

const onAddTodo = () => {
  if (taskText.value.trim() === '') {
    return
  }

  todoStore.addTodo({
    id: String(new Date().getTime()),
    task: taskText.value,
    isDone: false,
    isEditing: false,
    createdAt: new Date().getTime(),
  })

  taskText.value = ''
}
</script>

<template>
  <form
    @submit.prevent="onAddTodo"
    class="flex flex-col my-4"
  >
    <input
      v-model="taskText"
      name="todo"
      id="todo"
      placeholder="Введите задачу"
      class="w-full px-4 py-3 rounded border outline-none my-3 border-gray-300 focus:border-gray-500"
    />
    <UIButton :submit-btn="true">
      Добавить задачу
    </UIButton>
  </form>
</template>

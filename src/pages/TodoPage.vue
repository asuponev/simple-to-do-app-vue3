<script lang="ts" setup>
import { useTodoStore } from '@/store'

import AddTaskForm from '../components/AddTaskForm.vue';
import EmptyTaskList from '../components/EmptyTaskList.vue';
import TaskList from '../components/TaskList.vue';

const todoStore = useTodoStore()
</script>

<template>
  <main class="lg:grid lg:grid-cols-2 mt-16 container">
    <section class="lg:relative lg:mr-10">
      <div class="py-10 lg:sticky lg:top-16">
        <h2 class="font-semibold text-xl">Создать задачу</h2>
        <add-task-form />
      </div>
    </section>
    <section>
      <div class="py-10">
        <h2 class="font-semibold mb-5 text-xl">Список задач</h2>
        <empty-task-list v-if="todoStore.todoList.length === 0"/>
        <task-list v-else />
      </div>
    </section>
  </main>
</template>

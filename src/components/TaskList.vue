<script lang="ts" setup>
import { useTodoStore } from '@/store'
import type { ITodo } from '@/types'

const todoStore = useTodoStore()

const onSaveEditValue = (item: ITodo) => {
  if (item.task === '') {
    return
  }

  todoStore.saveEditTodo(item)
}
</script>

<template>
  <ul>
    <li
      v-for="item in todoStore.getSortTodos"
      :key="item.id"
      class="my-3"
    >
      <div class="flex items-center justify-between flex-wrap">
        <div class="sm:grow flex items-center">
          <input
            type="checkbox"
            :id="`checkbox-${item.id}`"
            v-model="item.isDone"
            :checked="item.isDone"
            @click="todoStore.doneTodo(item)"
            class="shrink-0 grow-0"
          />
          <input
            v-model="item.task"
            :id="`input-${item.id}`"
            :readonly="!item.isEditing"
            class="p-[5.5px] outline-none m-3 grow" 
            :class="[
              { 'line-through': item.isDone },
              { 'border rounded': item.isEditing },
            ]"
            @click="!item.isEditing ? todoStore.doneTodo(item) : null"
          />
        </div>
        <div class="flex items-center sm:shrink-0 sm:grow-0">
          <button
            v-if="item.isEditing"
            @click="onSaveEditValue(item)"
            class="bg-gray-100 px-4 py-2 rounded text-[14px] hover:bg-gray-200 transition-colors duration-200 outline-none"
          >
            Сохранить
          </button>
          <button
            v-else
            @click="todoStore.startEdit(item)"
            class="bg-gray-100 px-4 py-2 rounded text-[14px] hover:bg-gray-200 transition-colors duration-200"
          >
            Редактировать
          </button>
          <button
            @click="todoStore.removeTodo(item)"
            class="px-4 py-2 rounded hover:text-black text-[14px] text-gray-500 transition-colors duration-200 ml-3"
          >
            Удалить
          </button>
        </div>
      </div>
    </li>
  </ul>
</template>

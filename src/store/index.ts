import { defineStore } from 'pinia'
import type { ITodo } from '@/types'

interface State {
  todoList: ITodo[]
}

export const useTodoStore = defineStore({
  id: 'todoList',
  state: (): State => ({
    todoList: localStorage.getItem('todoList')
      ? JSON.parse(localStorage.getItem('todoList')!)
      : [],
  }),
  getters: {
    getSortTodos(): ITodo[] {
      return this.todoList.sort((a, b) => b.createdAt - a.createdAt)
    },
  },
  actions: {
    addTodo(item: ITodo) {
      this.todoList = [item, ...this.todoList]
      localStorage.setItem('todoList', JSON.stringify(this.todoList))
    },
    removeTodo(item: ITodo) {
      this.todoList = this.todoList.filter((todo) => todo.id !== item.id)
      localStorage.setItem('todoList', JSON.stringify(this.todoList))
    },
    doneTodo(item: ITodo) {
      this.todoList.forEach((todo) => {
        if (todo.id === item.id) {
          todo.isDone = !todo.isDone
        }
      })
      localStorage.setItem('todoList', JSON.stringify(this.todoList))
    },
    startEdit(item: ITodo) {
      this.todoList.forEach((todo) => {
        if (todo.id === item.id) {
          todo.isEditing = true
        }
      })
      localStorage.setItem('todoList', JSON.stringify(this.todoList))
    },
    saveEditTodo(item: ITodo) {
      this.todoList.forEach((todo) => {
        if (todo.id === item.id) {
          todo.task = item.task
          todo.isEditing = false
        }
      })
      localStorage.setItem('todoList', JSON.stringify(this.todoList))
    },
  },
})

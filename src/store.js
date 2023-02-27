import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import {v4 as uuidv4} from 'uuid';
const todosStore = (set) => ({
  todos: [],
  addTodoItem: (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    }

    set((state) => ({
      todos: [...state.todos, newTodo]
    }))
  },
  delTodo: (id) => {
    set((state) => ({
      todos: state.todos.filter((todo) => {
        return todo.id !== id;
      })
    }))
  },
  handleChange: (id) => {
    set((state) => ({
      todos: state.todos.map(todo => {
        if(todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;
      })
    }))
  },
  setUpdate: (updateTitle, id) => {
    set((state) => ({
      todos: state.todos.map((todo) => {
        if(todo.id === id) {
          todo.title = updateTitle;
        }
        return todo;
      })
    }))
  }
})
export const useTodosStore = create(
  persist(todosStore, {
    name: 'todos',
    storage: createJSONStorage(() => sessionStorage)
  })
);
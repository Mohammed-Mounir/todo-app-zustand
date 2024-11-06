import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { ITodo } from '../types';

interface ITodosState {
  todos: ITodo[];
  setTodos: (todo: ITodo[]) => void;
  addTodo: (todo: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  clearCompletedTodos: () => void;
}

export const useTodosStore = create<ITodosState>()(
  devtools(
    (set) => ({
      todos: [],
      setTodos: (todos) =>
        set(() => ({ todos }), undefined, 'TodosStore/setTodos'),
      addTodo: (todo) =>
        set(
          (state) => ({
            todos: [
              ...state.todos,
              { id: Date.now(), text: todo, completed: false },
            ],
          }),
          undefined,
          'TodosStore/addTodo'
        ),
      toggleTodo: (id) =>
        set(
          (state) => ({
            todos: state.todos.map((todo) =>
              todo.id === id ? { ...todo, completed: !todo.completed } : todo
            ),
          }),
          undefined,
          'TodosStore/toggleTodo'
        ),
      deleteTodo: (id) =>
        set(
          (state) => ({
            todos: state.todos.filter((todo) => todo.id !== id),
          }),
          undefined,
          'TodosStore/deleteTodo'
        ),
      clearCompletedTodos: () =>
        set(
          (state) => ({
            todos: state.todos.filter((todo) => !todo.completed),
          }),
          undefined,
          'TodosStore/clearCompletedTodos'
        ),
    }),
    { name: 'TodosStore' }
  )
);

import { create } from 'zustand';
import { TodoDTO } from '../src/@domain/dtos/TodoDTO';

interface TodoStore {
  todos: TodoDTO[];
  setTodos: (todos: TodoDTO[]) => void;
  appendTodos: (newItems: TodoDTO[]) => void;
  toggleTodo: (id: number) => void;
}

export const useTodoStore = create<TodoStore>(set => ({
  todos: [],
  setTodos: (todos: TodoDTO[]) => set({ todos }),
  appendTodos: (newItems: TodoDTO[]) =>
    set(state => {
      const existingIds = new Set(state.todos.map(t => t.id));
      const merged = newItems.filter(t => !existingIds.has(t.id));
      return { todos: [...state.todos, ...merged] };
    }),
  toggleTodo: (id: number) =>
    set(state => ({
      todos: state.todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    })),
}));

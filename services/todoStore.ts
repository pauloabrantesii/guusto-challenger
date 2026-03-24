import { create } from 'zustand';
import { TodoDTO } from '../src/@domain/dtos/TodoDTO';

interface TodoStore {
  todos: TodoDTO[];
  setTodos: (todos: TodoDTO[]) => void;
  toggleTodo: (id: number) => void;
}

export const useTodoStore = create<TodoStore>(set => ({
  todos: [],
  setTodos: (todos: TodoDTO[]) => set({ todos }),
  toggleTodo: (id: number) =>
    set(state => ({
      todos: state.todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    })),
}));

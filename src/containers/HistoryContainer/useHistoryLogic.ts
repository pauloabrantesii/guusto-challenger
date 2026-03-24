import { useTodoStore } from '@services/todoStore';

export const useHistoryLogic = () => {
  const { todos, toggleTodo } = useTodoStore();

  return {
    todos,
    toggleTodo,
  };
};

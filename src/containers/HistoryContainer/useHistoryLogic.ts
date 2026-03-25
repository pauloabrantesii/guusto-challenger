import { useTodoStore } from 'src/services/store/todoStore';

export const useHistoryLogic = () => {
  const { todos, toggleTodo } = useTodoStore();

  return {
    todos,
    toggleTodo,
  };
};

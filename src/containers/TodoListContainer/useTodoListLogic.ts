import { ListTodoService } from '@application/services/ListTodoService';
import { useQuery } from '@tanstack/react-query';
import { useCallback, useEffect, useState } from 'react';
import { useTodoStore } from 'src/services/store/todoStore';

const PAGE_SIZE = 20;
const todoService = new ListTodoService();

export const useTodoListLogic = () => {
  const [page, setPage] = useState(1);

  const { todos, setTodos, appendTodos, toggleTodo } = useTodoStore();
  const pendingCount = todos.filter(t => !t.completed).length;

  const { data, isLoading, isError } = useQuery({
    queryKey: ['todos', page],
    queryFn: () => todoService.getTodoList(page, PAGE_SIZE),
  });

  useEffect(() => {
    if (!data?.data) {
      return;
    }
    if (page === 1) {
      setTodos(data.data);
    } else {
      appendTodos(data.data);
    }
  }, [data, page, setTodos, appendTodos]);

  const handleLoadMore = useCallback(() => {
    if (!isLoading) {
      setPage(prev => prev + 1);
    }
  }, [isLoading]);

  return {
    todos,
    pendingCount,
    isLoading,
    isError,
    toggleTodo,
    handleLoadMore,
  };
};

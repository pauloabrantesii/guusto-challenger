import { useCallback, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ListTodoService } from '@application/services/ListTodoService';
import { useTodoStore } from '@services/todoStore';

const PAGE_SIZE = 20;
const todoService = new ListTodoService();

export const useTodoListLogic = () => {
  const [page, setPage] = useState(1);

  const { todos, setTodos, toggleTodo } = useTodoStore();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['todos', page],
    queryFn: () => todoService.getTodoList(page, PAGE_SIZE),
  });

  useEffect(() => {
    if (data?.data) {
      if (page === 1) {
        setTodos(data.data);
      } else {
        const currentIds = new Set(todos.map(t => t.id));
        const newItems = data.data.filter(t => !currentIds.has(t.id));
        setTodos([...todos, ...newItems]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handleLoadMore = useCallback(() => {
    if (!isLoading) {
      setPage(prev => prev + 1);
    }
  }, [isLoading]);

  return {
    todos,
    isLoading,
    isError,
    toggleTodo,
    handleLoadMore,
  };
};

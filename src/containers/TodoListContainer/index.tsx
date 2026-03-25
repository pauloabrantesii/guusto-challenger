import { TodoListComponent } from '@components/TodoListComponent';
import React from 'react';
import { useTodoListLogic } from './useTodoListLogic';

export const TodoListContainer = () => {
  const { todos, pendingCount, isLoading, isError, toggleTodo, handleLoadMore } =
    useTodoListLogic();

  return (
    <TodoListComponent
      todos={todos}
      pendingCount={pendingCount}
      isLoading={isLoading}
      isError={isError}
      onToggle={toggleTodo}
      onLoadMore={handleLoadMore}
    />
  );
};

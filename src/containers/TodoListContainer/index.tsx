import { TodoListComponent } from '@components/TodoListComponent';
import React from 'react';
import { useTodoListLogic } from './useTodoListLogic';

export const TodoListContainer = () => {
  const { todos, isLoading, isError, toggleTodo, handleLoadMore } =
    useTodoListLogic();

  return (
    <TodoListComponent
      todos={todos}
      isLoading={isLoading}
      isError={isError}
      onToggle={toggleTodo}
      onLoadMore={handleLoadMore}
    />
  );
};

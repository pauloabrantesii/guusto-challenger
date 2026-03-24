import { HistoryComponent } from '@components/HistoryComponent';
import React from 'react';
import { useHistoryLogic } from './useHistoryLogic';

export const HistoryContainer = () => {
  const { todos, toggleTodo } = useHistoryLogic();

  return <HistoryComponent todos={todos} onToggle={toggleTodo} />;
};

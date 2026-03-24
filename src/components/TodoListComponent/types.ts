import { TodoDTO } from '@domain/dtos/TodoDTO';

export interface TodoListComponentProps {
  todos: TodoDTO[];
  isLoading: boolean;
  isError: boolean;
  onToggle: (id: number) => void;
  onLoadMore: () => void;
}

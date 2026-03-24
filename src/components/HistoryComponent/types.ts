import { TodoDTO } from '@domain/dtos/TodoDTO';

export interface HistoryComponentProps {
  todos: TodoDTO[];
  onToggle: (id: number) => void;
}

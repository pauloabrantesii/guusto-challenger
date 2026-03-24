import { ITodoListServiceResponse } from '@domain/dtos/TodoDTO';

export interface ITodoListService {
  getTodoList(page: number, pageSize: number): Promise<ITodoListServiceResponse>;
}

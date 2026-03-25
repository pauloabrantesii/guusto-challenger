// Interface para a camada de serviço de listagem de tarefas.
import { ITodoListServiceResponse } from '@domain/dtos/TodoDTO';

export interface ITodoListService {
  getTodoList(
    page: number,
    pageSize: number,
  ): Promise<ITodoListServiceResponse>;
}

import { ITodoListServiceResponse } from '@domain/dtos/TodoDTO';
import { ITodoListService } from '@domain/services/ITodoListService';
import { AxiosInstance } from 'axios';
import { getAuthenticatedInstance } from '../../services/api';

// Aqui criei a camada de aplicação, que é responsável por chamar a API e retornar os dados.
export class ListTodoService implements ITodoListService {
  private apiInstance: AxiosInstance | null = null;

  private async setupApiInstance() {
    if (!this.apiInstance || !this.apiInstance.defaults.headers.Authorization) {
      this.apiInstance = await getAuthenticatedInstance();
    }

    return this.apiInstance;
  }

  async getTodoList(
    page: number,
    pageSize: number,
  ): Promise<ITodoListServiceResponse> {
    const instance = await this.setupApiInstance();
    const params = {
      _page: page || 1,
      _limit: pageSize || 20,
    };
    const { data } = await instance.get('/todos', { params });
    return { data, page, limit: pageSize };
  }
}

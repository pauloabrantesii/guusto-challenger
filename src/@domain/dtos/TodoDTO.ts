// DTO - Data Transfer Object é um objeto que transfere dados entre diferentes camadas de uma aplicação.
export interface TodoDTO {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

export interface ITodoListServiceResponse {
  data: TodoDTO[];
  page: number;
  limit: number;
}

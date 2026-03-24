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

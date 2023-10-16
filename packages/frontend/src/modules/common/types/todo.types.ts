export interface ITodo {
  id: number;
  title: string;
  description: string;
  isPublic: boolean;
  completed: boolean;
}

export interface ICreateTodo extends Omit<ITodo, 'id'> {}

export interface IUpdateTodo {
  title?: string;
  description?: string;
  isPublic?: boolean;
  completed?: boolean;
}

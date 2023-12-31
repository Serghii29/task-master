import { useMutation, useQueryClient } from '@tanstack/react-query';
import { APP_KEYS } from '../../common/consts';
import { ICreateTodo } from '../types/todo.types';
import { createNewTodo } from '../utils/fetch.todos';

export const useCreate = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [APP_KEYS.QUERY_KEYS.CREATE],
    mutationFn: (data: ICreateTodo) => createNewTodo(data),
    onSuccess: () => queryClient.invalidateQueries([APP_KEYS.QUERY_KEYS.TODOS])
  });
};

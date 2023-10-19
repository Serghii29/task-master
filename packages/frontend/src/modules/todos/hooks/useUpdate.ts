import { useMutation, useQueryClient } from '@tanstack/react-query';
import { APP_KEYS } from '../../common/consts';
import { IUpdateTodo } from '../types/todo.types';
import { updateTodo } from '../utils/fetch.todos';

export const useUpdate = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [APP_KEYS.QUERY_KEYS.UPDATE] as string[],
    mutationFn: (variables: [id: number, data: IUpdateTodo]) => {
      const [id, data] = variables;
      return updateTodo(id, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries([APP_KEYS.QUERY_KEYS.TODOS]);
      queryClient.invalidateQueries([APP_KEYS.QUERY_KEYS.TODO]);
    }
  });
};

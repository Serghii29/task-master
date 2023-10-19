import { useMutation, useQueryClient } from '@tanstack/react-query';
import { APP_KEYS } from '../../common/consts';
import { removeTodo } from '../utils/fetch.todos';

export const useDelete = (id: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [APP_KEYS.QUERY_KEYS.DELETE],
    mutationFn: () => removeTodo(id),
    onSuccess: () => queryClient.invalidateQueries([APP_KEYS.QUERY_KEYS.TODOS])
  });
};

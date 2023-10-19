import { useQuery } from '@tanstack/react-query';
import { APP_KEYS } from '../../common/consts';
import { fetchTodoById } from '../utils/fetch.todos';

export const useTodo = (id: number) =>
  useQuery({
    queryKey: [APP_KEYS.QUERY_KEYS.TODO],
    queryFn: () => fetchTodoById(id),
    select: (data) => data
  });

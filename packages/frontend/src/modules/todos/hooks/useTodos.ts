import { useQuery } from '@tanstack/react-query';
import { APP_KEYS } from '../../common/consts';
import { fetchTodos } from '../utils/fetch.todos';

export const useTodos = () =>
  useQuery({
    queryKey: [APP_KEYS.QUERY_KEYS.TODOS],
    queryFn: () => fetchTodos(),
    select: (data) => data
  });

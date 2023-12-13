import { fetchMemoirs } from '@/api/memoir';
import { MEMOIRS } from '@/api/path';
import { useUserStore } from '@/store/user';
import { useQuery } from '@tanstack/react-query';

export const useFetchMemoir = (year_week: string) => {
  const { user } = useUserStore();
  const { data, isLoading, isError } = useQuery({
    queryKey: [MEMOIRS, year_week],
    queryFn: ({ queryKey }) => {
      return fetchMemoirs(user?.id, queryKey[1]);
    },
    enabled: Boolean(user?.id),
  });
  return data;
};

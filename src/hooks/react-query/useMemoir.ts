import { fetchMemoirs } from '@/api/memoir';
import { MEMOIRS } from '@/api/path';
import { useUserStore } from '@/store/user';
import { useSuspenseQuery } from '@tanstack/react-query';

export const useFetchMemoir = (year_week: string) => {
  const { user } = useUserStore();
  const { data, error } = useSuspenseQuery({
    queryKey: [MEMOIRS, user?.id, year_week],
    queryFn: ({ queryKey }) => {
      if (!user?.id) {
        return null;
      }
      return fetchMemoirs(queryKey[1], queryKey[2]);
    },
  });

  if (error) {
    throw error;
  }
  return data;
};

import { fetchMemoirs } from '@/api/memoir';
import { MEMOIRS } from '@/api/path';
import { Memoir } from '@/types/memoir';
import { useQuery } from '@tanstack/react-query';

export const useFetchMemoir = (year_week: string) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [MEMOIRS, year_week],
    queryFn: () => fetchMemoirs(1, year_week),
  });
  return data;
};

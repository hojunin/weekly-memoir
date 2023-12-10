import { MEMOIRS } from '@/api/path';
import { useMemoirStore } from '@/store/memoir';
import { Memoir } from '@/types/memoir';
import { useQueryClient } from '@tanstack/react-query';

const useGetMemoir = () => {
  const { year_week, activeCategory } = useMemoirStore();
  const queryClient = useQueryClient();
  const memoirData = queryClient.getQueryData([MEMOIRS, year_week]) as Memoir[];

  const targetMemoir = memoirData?.find(
    (memoir) => memoir.type.id === activeCategory?.id,
  );

  return targetMemoir;
};

export default useGetMemoir;

import { MEMOIRS } from '@/api/path';
import { useMemoirStore } from '@/store/memoir';
import { useUserStore } from '@/store/user';
import { Memoir } from '@/types/memoir';
import { useQueryClient } from '@tanstack/react-query';

const useGetMemoir = () => {
  const { year_week, activeCategory } = useMemoirStore();
  const { user } = useUserStore();
  const queryClient = useQueryClient();
  const memoirData = queryClient.getQueryData([
    MEMOIRS,
    user?.id,
    year_week,
  ]) as Memoir[];

  const targetMemoir = memoirData?.find(
    (memoir) => memoir.type.id === activeCategory?.id,
  );

  return targetMemoir;
};

export default useGetMemoir;

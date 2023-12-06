import { User } from '@/types/user';
import { HTTP_METHOD_TYPE, fetcher } from './fetchr';
import { USER } from './path';
import { Category } from '@/types/category';

export const fetchUser = async (kakao_id: number) => {
  try {
    const {
      result: { user, categories },
    } = await fetcher<{
      result: { user: User; categories: Category[] };
    }>({
      path: `${USER}?id=${kakao_id}`,
      config: {
        method: HTTP_METHOD_TYPE.GET,
      },
    });

    return { user, categories };
  } catch (error) {}
};

import { User } from '@/types/user';
import { HTTP_METHOD_TYPE, fetcher } from './fetchr';
import { USER } from './path';
import { Category } from '@/types/category';

export const fetchUser = async (id: number) => {
  try {
    const response = await fetcher<{ user: User; categories: Category[] }>({
      path: USER,
      config: {
        method: HTTP_METHOD_TYPE.GET,
      },
    });

    return response;
  } catch (error) {}
};

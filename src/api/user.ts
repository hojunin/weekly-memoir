import { CreateUserEntity, User } from '@/types/user';
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
  } catch (error) {
    throw error;
  }
};

export const createUser = async (body: CreateUserEntity) => {
  try {
    const response = await fetcher({
      path: USER,
      config: {
        method: HTTP_METHOD_TYPE.POST,
        body: JSON.stringify(body),
      },
    });

    return response;
  } catch (error) {
    throw error;
  }
};

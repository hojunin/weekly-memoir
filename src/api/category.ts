import {
  Category,
  CreateCategoryEntity,
  CreateUserCategoryEntity,
  DeleteUserCategoryEntity,
} from '@/types/category';
import { HTTP_METHOD_TYPE, fetcher } from './fetchr';
import { CATEGORY, SEARCH_CATEGORY, USER_CATEGORY } from './path';
import { Id } from '@/types';

export const fetchCategory = async (id: Id) => {
  try {
    const response = await fetcher({
      path: `${CATEGORY}id=${id}`,
      config: {
        method: HTTP_METHOD_TYPE.GET,
      },
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export const searchCategory = async (query: string) => {
  try {
    const response = await fetcher<{ result: Category }>({
      path: `${SEARCH_CATEGORY}?query=${query}`,
      config: {
        method: HTTP_METHOD_TYPE.GET,
      },
    });

    return response.result;
  } catch (error) {
    throw error;
  }
};

export const createCategory = async (body: CreateCategoryEntity) => {
  try {
    const response = await fetcher<{ category: Category }>({
      path: CATEGORY,
      config: {
        method: HTTP_METHOD_TYPE.POST,
        body: JSON.stringify(body),
      },
    });

    return response.category;
  } catch (error) {
    throw error;
  }
};

export const linkUserCategory = async (body: CreateUserCategoryEntity) => {
  try {
    const response = await fetcher({
      path: USER_CATEGORY,
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

export const unlinkUserCategory = async (body: DeleteUserCategoryEntity) => {
  try {
    const response = await fetcher({
      path: USER_CATEGORY,
      config: {
        method: HTTP_METHOD_TYPE.DELETE,
        body: JSON.stringify(body),
      },
    });

    return response;
  } catch (error) {
    throw error;
  }
};

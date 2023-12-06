import { CreateMemoirEntity, Memoir } from '@/types/memoir';
import { HTTP_METHOD_TYPE, fetcher } from '../fetchr';
import { MEMOIR } from '../path';

export const createMemoir = async (body: CreateMemoirEntity) => {
  try {
    await fetcher<Memoir>({
      path: MEMOIR,
      config: {
        method: HTTP_METHOD_TYPE.POST,
        body: JSON.stringify(body),
      },
    });
  } catch (error) {
    throw error;
  }
};

import { Memoir } from '@/types/memoir';
import { HTTP_METHOD_TYPE, fetcher } from './fetchr';
import { MEMOIR, MEMOIRS } from './path';

export const fetchMemoirs = async (id: number, year_week: string) => {
  try {
    const response = await fetcher<{ result: Memoir[] }>({
      path: `${MEMOIRS}?id=${id}&year_week=${year_week}`,
      config: {
        method: HTTP_METHOD_TYPE.GET,
      },
    });

    if (response) {
      return response.result;
    }
  } catch (error) {
    throw error;
  }
};

export const fetchMemoir = async (id: number) => {
  return await fetcher({
    path: `${MEMOIR}?id=${id}`,
    config: {
      method: HTTP_METHOD_TYPE.GET,
    },
  });
};

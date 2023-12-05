'use server';
import { Memoir } from '@/types/memoir';
import { HTTP_METHOD_TYPE, fetcher } from '../fetchr';
import { MEMOIR } from '../path';
import { revalidateTag } from 'next/cache';

export const createMemoir = async (body: FormData) => {
  try {
    const response = await fetcher<Memoir>({
      path: MEMOIR,
      config: {
        method: HTTP_METHOD_TYPE.POST,
        body,
      },
    });

    if (response) {
      revalidateTag('memoir');
    }
  } catch (error) {
    throw error;
  }
};

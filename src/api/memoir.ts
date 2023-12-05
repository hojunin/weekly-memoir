import { HTTP_METHOD_TYPE, fetcher } from './fetchr';
import { MEMOIR } from './path';

export const fetchMemoirs = () => {};

export const fetchMemoir = async (id: number) => {
  return await fetcher({
    path: `${MEMOIR}?id=${id}`,
    config: {
      method: HTTP_METHOD_TYPE.GET,
    },
  });
};

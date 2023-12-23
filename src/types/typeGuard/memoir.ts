import { Memoir } from '../memoir';

export const isMemoir = (memoir: unknown): memoir is Memoir => {
  if (!Boolean(memoir)) {
    return false;
  }
  return Boolean((memoir as Memoir).id) && Boolean((memoir as Memoir).title);
};

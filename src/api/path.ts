export const IMAGER_URL = 'https://api.imgur.com/';
export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://weekly-memoir.vercel.app/'
    : 'http://localhost:3000/';

export const UPLOAD_IMAGE = '3/image/';

export const MEMOIR = 'api/memoir';
export const MEMOIRS = 'api/memoir/list';

export const USER = 'api/user';
export const CATEGORY = 'api/category';
export const SEARCH_CATEGORY = 'api/category/search';
export const USER_CATEGORY = 'api/user-category';

import { Id, Nullable } from '.';

export type NextAuthStatus = 'authenticated' | 'loading' | 'unauthenticated';

export interface User {
  id: Id;
  user_name: string;
  phone_number: string;
  email: string;
  kakao_id: string;
  thumbnail: string;
}

export interface CreateUserEntity {
  user_name: string;
  // phone_number: string;
  // email: string;
  kakao_id: string;
  thumbnail: string;
}

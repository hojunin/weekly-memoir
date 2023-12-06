import { Id, Nullable } from '.';

export interface User {
  id: Id;
  user_name: string;
  phone_number: string;
  email: string;
  kakao_id: Nullable<string>;
}

import { Id } from '.';

export interface Category {
  id: Id;
  title: string;
  placeholder: string;
}

export interface CreateCategoryEntity {
  title: string;
  placeholder?: string;
}

export interface CreateUserCategoryEntity {
  user_id: string;
  category_id: string;
}

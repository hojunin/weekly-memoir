import { Id } from '.';
import { Category } from './category';

export interface Memoir {
  id: number;
  title: string;
  description: string;
  images: string[];
  createdAt: string;
  type: Category;
  year_week: string;
}

export interface CreateMemoirEntity {
  title: string;
  description: string;
  images?: string[];
  type: Id;
  year_week: string;
  user_id: number;
}

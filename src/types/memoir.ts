export interface Memoir {
  id: number;
  title: string;
  description: string;
  images: string[];
  createdAt: string;
  type: string;
  year_month: string;
}

export interface CreateMemoirEntity {
  title: string;
  description: string;
  images?: string[];
  type: string;
  year_month: string;
  user_id: number;
}
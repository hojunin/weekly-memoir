export interface Memoir {
  title: string;
  description: string;
  images: string[];
  createdAt: string;
}

export interface CreateMemoirEntity {
  title: string;
  description: string;
  images?: string[];
}

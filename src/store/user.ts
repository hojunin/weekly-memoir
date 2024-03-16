import { Category } from '@/types/category';
import { User } from '@/types/user';
import { create } from 'zustand';

interface UserState {
  user: User | null;
  categories: Category[] | null;
  updateUser: (user: User | null) => void;
  updateCategories: (categories: Category[] | null) => void;
}

export const useUserStore = create<UserState>()((set) => ({
  user: null,
  categories: null,
  updateUser: (user) => set(() => ({ user })),
  updateCategories: (categories) => set(() => ({ categories })),
}));

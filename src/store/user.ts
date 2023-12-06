import { Category } from '@/types/category';
import { User } from '@/types/user';
import { create } from 'zustand';

interface UserState {
  isLoggedIn: boolean;
  user: User | null;
  categories: Category[] | null;
  updateStatus: (isLoggedIn: boolean) => void;
  updateUser: (user: User | null) => void;
  updateCategories: (categories: Category[] | null) => void;
}

export const useUserStore = create<UserState>()((set) => ({
  isLoggedIn: false,
  user: null,
  categories: null,
  updateStatus: (isLoggedIn) => set(() => ({ isLoggedIn })),
  updateUser: (user) => set(() => ({ user })),
  updateCategories: (categories) => set(() => ({ categories })),
}));

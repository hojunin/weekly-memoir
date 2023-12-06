import { Id } from '@/types';
import { Category } from '@/types/category';
import { getCurrentWeek, getCurrentYear } from '@/utils/date';
import { create } from 'zustand';

interface MemoirState {
  year_week: string;
  activeCategory: Category | null;
  updateYearWeek: (year_week: string) => void;
  setActiveCategory: (activeCategory: Category) => void;
}

export const useMemoirStore = create<MemoirState>()((set) => ({
  year_week: `${getCurrentYear()}-${getCurrentWeek()}`,
  activeCategory: null,
  updateYearWeek: (year_week) => set(() => ({ year_week })),
  setActiveCategory: (activeCategory) => set(() => ({ activeCategory })),
}));

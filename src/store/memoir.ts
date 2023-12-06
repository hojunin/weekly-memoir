import { getCurrentWeek, getCurrentYear } from '@/utils/date';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface MemoirState {
  year_week: string;

  updateYearWeek: (year_week: string) => void;
}

export const useMemoirStore = create<MemoirState>()((set) => ({
  year_week: `${getCurrentYear()}-${getCurrentWeek()}`,
  updateYearWeek: (year_week) => set(() => ({ year_week })),
}));

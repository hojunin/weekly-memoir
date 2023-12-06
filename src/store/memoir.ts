import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface MemoirState {
  year_week: string;

  updateYearWeek: (year_week: string) => void;
}

export const useMemoirStore = create<MemoirState>()((set) => ({
  year_week: '2023-52',
  updateYearWeek: (year_week) => set(() => ({ year_week })),
}));

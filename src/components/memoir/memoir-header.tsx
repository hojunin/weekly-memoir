'use client';
import React, { useCallback } from 'react';
import WeekSelector from './week-selector';
import YearSelector from './year-selector';
import { calcWeeks } from '@/utils/date';
import { useMemoirStore } from '@/store/memoir';

const MemoirHeader = () => {
  const { year_week, updateYearWeek } = useMemoirStore();
  const [year, week] = year_week.split('-');

  const updateYear = useCallback((targetYear: string) => {
    updateYearWeek(`${targetYear}-${week}`);
  }, []);

  const updateWeek = useCallback((targetWeek: string) => {
    updateYearWeek(`${year}-${week}`);
  }, []);

  return (
    <div className="flex flex-col py-10">
      <div className="flex items-center justify-between">
        <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
          {`${[...year_week.split('-')].join('년 ')} 주차`}
        </h2>

        <div className="flex gap-x-4 mt-6">
          <YearSelector onValueChange={updateYear} />
          <WeekSelector weeks={calcWeeks(year)} onValueChange={updateWeek} />
        </div>
      </div>
    </div>
  );
};

export default MemoirHeader;

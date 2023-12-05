'use client';
import React, { useState } from 'react';
import WeekSelector from './week-selector';
import YearSelector from './year-selector';
import { calcWeeks, getCurrentYear } from '@/utils/date';

const MemoirHeader = () => {
  const [week, setWeek] = useState('');
  const [year, setYear] = useState(getCurrentYear());

  return (
    <div className="flex flex-col py-10">
      <div className="flex items-center justify-between">
        <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
          {`${year}년 ${week}`}
        </h2>

        <div className="flex gap-x-4 mt-6">
          <YearSelector onValueChange={setYear} />
          <WeekSelector weeks={calcWeeks(year)} onValueChange={setWeek} />
        </div>
      </div>
    </div>
  );
};

export default MemoirHeader;

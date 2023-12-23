'use client';
import { useFetchMemoir } from '@/hooks/react-query/useMemoir';
import React from 'react';
import ReportSection from './report-section';

const MemoirDetailContent = ({ year_week }: { year_week: string }) => {
  const memoirs = useFetchMemoir(year_week);

  if (!memoirs) {
    return null;
  }

  return (
    <div className="flex flex-col gap-y-6">
      {memoirs.map((memoir) => (
        <ReportSection key={memoir.id} memoirData={memoir} />
      ))}
    </div>
  );
};

export default MemoirDetailContent;

'use client';
import { useFetchMemoir } from '@/hooks/react-query/useMemoir';
import React from 'react';
import MemoirSection from './memoir-section';

const MemoirDetailContent = ({ year_week }: { year_week: string }) => {
  const memoirs = useFetchMemoir(year_week);

  if (!memoirs) {
    return <h1>에러 발생했습니다</h1>;
  }

  return (
    <div className="flex flex-col gap-y-6">
      {memoirs.map((memoir) => (
        <MemoirSection key={memoir.id} memoirData={memoir} />
      ))}
    </div>
  );
};

export default MemoirDetailContent;

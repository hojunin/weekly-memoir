import MemoirDetailContent from '@/components/memoir/detail';
import { useMemoirStore } from '@/store/memoir';
import React from 'react';

const MemoirDetail = ({ params }: { params: { year_week: string } }) => {
  return (
    <div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-14">{`${[
        ...params.year_week.split('-'),
      ].join('년 ')}주차 회고록`}</h1>

      <MemoirDetailContent year_week={params.year_week} />
    </div>
  );
};

export default MemoirDetail;

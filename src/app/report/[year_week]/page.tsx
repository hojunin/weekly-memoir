import MemoirDetailContent from '@/components/report/detail';
import { Skeleton } from '@/components/ui/skeleton';
import React, { Suspense } from 'react';

const ReportDetail = ({ params }: { params: { year_week: string } }) => {
  return (
    <div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-14">{`${[
        ...params.year_week.split('-'),
      ].join('년 ')}주차 회고록`}</h1>

      <Suspense
        fallback={
          <div className="flex flex-col gap-y-4">
            <Skeleton className="w-full h-[200px] rounded-xl" />
            <Skeleton className="w-full h-[200px] rounded-xl" />
            <Skeleton className="w-full h-[200px] rounded-xl" />
            <Skeleton className="w-full h-[200px] rounded-xl" />
            <Skeleton className="w-full h-[200px] rounded-xl" />
            <Skeleton className="w-full h-[200px] rounded-xl" />
          </div>
        }
      >
        <MemoirDetailContent year_week={params.year_week} />
      </Suspense>
    </div>
  );
};

export default ReportDetail;

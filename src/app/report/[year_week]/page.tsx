import MemoirDetailContent from '@/components/report/detail';
import ReportSectionSkeleton from '@/components/report/detail/report-section-skeleton';
import React, { Suspense } from 'react';

const ReportDetail = ({ params }: { params: { year_week: string } }) => {
  return (
    <div className="mb-20">
      <h1 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-8">{`${[
        ...params.year_week.split('-'),
      ].join('년 ')}주차 회고록`}</h1>

      <Suspense
        fallback={
          <div className="flex flex-col gap-y-4">
            <ReportSectionSkeleton />
            <ReportSectionSkeleton />
            <ReportSectionSkeleton />
            <ReportSectionSkeleton />
            <ReportSectionSkeleton />
            <ReportSectionSkeleton />
          </div>
        }
      >
        <MemoirDetailContent year_week={params.year_week} />
      </Suspense>
    </div>
  );
};

export default ReportDetail;

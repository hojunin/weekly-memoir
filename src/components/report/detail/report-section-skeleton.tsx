import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { Card } from '@/components/ui/card';

const ReportSectionSkeleton = () => {
  return (
    <Card className="flex flex-col gap-y-3 p-6">
      <Skeleton className="w-40 h-6 rounded-md" />
      <Skeleton className="w-10 h-4 rounded-md" />
      <Skeleton className="w-full h-16 rounded-md" />
    </Card>
  );
};

export default ReportSectionSkeleton;

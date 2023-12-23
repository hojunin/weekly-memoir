import { Metadata } from 'next';
import React from 'react';

const ReportDetailLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-2/3 my-0 mx-auto">{children}</div>;
};

export const metadata: Metadata = {
  title: '보고서 상세 | THE WEEKLY',
  description: '주간 카테고리별 회고',
};

export default ReportDetailLayout;

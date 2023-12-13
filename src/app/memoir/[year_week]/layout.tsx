import { Metadata } from 'next';
import React from 'react';

const MemoirDetailLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="">{children}</div>;
};

export const metadata: Metadata = {
  title: '회고 상세 | THE WEEKLY',
  description: '주간 카테고리별 회고',
};

export default MemoirDetailLayout;

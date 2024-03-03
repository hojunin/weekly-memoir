import { Metadata } from 'next';
import React from 'react';

const MemoirLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full min-h-screen justify-center gap-x-9">
      {children}
    </div>
  );
};

export const metadata: Metadata = {
  title: '회고하기 | THE WEEKLY',
  description: '주간 카테고리별 회고',
};

export default MemoirLayout;

export const dynamic = 'error';

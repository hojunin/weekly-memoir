import React from 'react';

const MemoirLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full min-h-screen justify-center gap-x-9">
      {children}
    </div>
  );
};

export default MemoirLayout;

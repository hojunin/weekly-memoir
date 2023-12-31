import MemoirForm from '@/components/memoir/memoir-form';
import MemoirHeader from '@/components/memoir/memoir-header';
import MemoirList from '@/components/memoir/memoir-list';
import React from 'react';

const Memoir = () => {
  return (
    <div className="w-2/3">
      <MemoirHeader />
      <div className="flex gap-x-6">
        <MemoirList />
        <MemoirForm />
      </div>
    </div>
  );
};

export default Memoir;

import MemoirForm from '@/components/memoir/memoir-form';
import MemoirList from '@/components/memoir/memoir-list';
import React from 'react';

const Memoir = () => {
  return (
    <div className="flex w-2/3">
      <MemoirList />
      <MemoirForm />
    </div>
  );
};

export default Memoir;

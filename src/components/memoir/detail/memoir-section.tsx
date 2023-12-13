import { Memoir } from '@/types/memoir';
import React from 'react';

interface Props {
  memoirData: Memoir;
}

const MemoirSection = ({ memoirData }: Props) => {
  const {} = memoirData;
  return (
    <section>
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        {memoirData.title}
      </h2>

      <p>{memoirData.description}</p>
    </section>
  );
};

export default MemoirSection;

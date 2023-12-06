import React from 'react';
import { fetchMemoirs } from '@/api/memoir';
import { Button } from '../ui/button';

interface Props {
  year_week: string;
}

const MemoirList = async ({ year_week }: Props) => {
  const memoirs = await fetchMemoirs(1, year_week);

  if (!memoirs) {
    return <></>;
  }

  return (
    <div className="w-1/4">
      <h2 className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        목록
      </h2>

      <ul className="flex flex-col gap-y-4">
        {memoirs.map((memoir) => (
          <Button key={memoir.id} className="bg-slate-800">
            {memoir.type}
          </Button>
        ))}
      </ul>
    </div>
  );
};

export default MemoirList;

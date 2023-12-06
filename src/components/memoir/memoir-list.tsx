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
      <h2 className="scroll-m-20 pb-2 mb-8 text-3xl font-semibold tracking-tight first:mt-0">
        작성할 회고
      </h2>

      <ul className="flex flex-col gap-y-4">
        {memoirs.map((memoir) => (
          <Button
            key={memoir.id}
            className="bg-slate-300 dark:text-white dark:bg-slate-600"
          >
            {memoir.type}
          </Button>
        ))}
      </ul>

      <Button variant={'ghost'} className="mt-4">
        + 카테고리 추가하기
      </Button>
    </div>
  );
};

export default MemoirList;

'use client';
import React from 'react';
import { Button } from '../ui/button';
import { useUserStore } from '@/store/user';
import { useMemoirStore } from '@/store/memoir';
import { Id } from '@/types';
import { Category } from '@/types/category';

interface Props {
  year_week: string;
}

const MemoirList = ({ year_week }: Props) => {
  const { categories } = useUserStore();
  const { activeCategory, setActiveCategory } = useMemoirStore();

  const onClickCategory = (category: Category) => {
    setActiveCategory(category);
  };

  return (
    <div className="w-1/4">
      <h2 className="scroll-m-20 pb-2 mb-8 text-3xl font-semibold tracking-tight first:mt-0">
        작성할 회고
      </h2>

      <ul className="flex flex-col gap-y-4">
        {categories?.map((category) => (
          <Button
            key={category.id}
            variant={
              activeCategory?.id === category.id ? 'default' : 'secondary'
            }
            onClick={() => onClickCategory(category)}
          >
            {category.title}
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

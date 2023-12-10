'use client';
import React, { useEffect } from 'react';
import { Button } from '../ui/button';
import { useUserStore } from '@/store/user';
import { useMemoirStore } from '@/store/memoir';
import { Category } from '@/types/category';
import CategoryAddButton from './category-add-button';
import { useFetchMemoir } from '@/hooks/react-query/useMemoir';
import { BadgeCheck, Loader, Loader2 } from 'lucide-react';
import { Id } from '@/types';

interface Props {}

const MemoirList = ({}: Props) => {
  const { categories } = useUserStore();
  const { activeCategory, setActiveCategory, year_week } = useMemoirStore();
  const memoirs = useFetchMemoir(year_week);

  useEffect(() => {
    if (Array.isArray(categories) && categories.length > 0) {
      setActiveCategory(categories[0]);
    }
  }, [categories]);

  const onClickCategory = (category: Category) => {
    setActiveCategory(category);
  };

  const isDone = (categoryId: Id) => {
    return !!memoirs?.find((memoir) => memoir.type.id === categoryId);
  };

  return (
    <div className="w-1/4">
      <h2 className="scroll-m-20 pb-2 mb-8 text-3xl font-semibold tracking-tight first:mt-0">
        작성할 회고
      </h2>

      {Array.isArray(categories) ? (
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
              {isDone(category.id) && (
                <BadgeCheck color="#32cd32" className="ml-2" />
              )}
            </Button>
          ))}
        </ul>
      ) : (
        <Loader2 />
      )}

      <CategoryAddButton />
    </div>
  );
};

export default MemoirList;

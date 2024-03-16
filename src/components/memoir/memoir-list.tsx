'use client';
import React, { useCallback, useEffect } from 'react';
import { Button } from '../ui/button';
import { useUserStore } from '@/store/user';
import { useMemoirStore } from '@/store/memoir';
import { Category } from '@/types/category';
import CategoryAddButton from './category-add-button';
import { useFetchMemoir } from '@/hooks/react-query/useMemoir';
import { Id } from '@/types';
import useLogin from '@/hooks/useLogin';
import MemoirListItem from './memoir-list-item';
import { unlinkUserCategory } from '@/api/category';
import { useToast } from '../ui/use-toast';
import { Skeleton } from '../ui/skeleton';

interface Props {}

const MemoirList = ({}: Props) => {
  const { user, categories, updateCategories } = useUserStore();
  const { activeCategory, year_week, setActiveCategory } = useMemoirStore();
  const { logIn } = useLogin();
  const { toast } = useToast();
  const memoirs = useFetchMemoir(year_week);

  useEffect(() => {
    if (Array.isArray(categories) && categories.length > 0) {
      setActiveCategory(categories[0]);
    }
  }, [categories]);

  const onClickCategory = useCallback((category: Category) => {
    setActiveCategory(category);
  }, []);

  const isDone = (categoryId: Id) => {
    return !!memoirs?.find((memoir) => memoir.type.id === categoryId);
  };

  const onClickDeleteCategory = async (targetCategory: Category) => {
    try {
      const response = await unlinkUserCategory({
        category_id: targetCategory.id,
        user_id: user?.id,
      });
      if (response) {
        toast({
          title: `${targetCategory.title} 카테고리가 성공적으로 제거되었어요.`,
          description: '다시 등록하시면 이전처럼 활용하실 수 있어요',
          variant: 'destructive',
        });

        updateCategories(
          categories?.filter((category) => category.id !== targetCategory.id),
        );
      }
    } catch (error) {
      toast({
        title: '카테고리 제거에 실패했어요.',
        description: `잠시 후에 다시 시도해주세요 : ${error.message}`,
      });
    }
  };

  if (!user) {
    return <Button onClick={logIn}>로그인하고 회고 작성하기</Button>;
  }

  return (
    <div className="w-1/4">
      <h2 className="scroll-m-20 pb-2 mb-8 text-3xl font-semibold tracking-tight first:mt-0">
        작성할 회고
      </h2>

      {Array.isArray(categories) ? (
        <ul className="flex flex-col gap-y-4">
          {categories?.map((category) => (
            <MemoirListItem
              key={category.id}
              categoryItem={category}
              onClickItem={onClickCategory}
              isActive={activeCategory?.id === category.id}
              isDone={isDone(category.id)}
              onClickDelete={() => onClickDeleteCategory(category)}
            />
          ))}
        </ul>
      ) : (
        <div className="flex flex-col w-full gap-y-2">
          <Skeleton className="w-full h-12 rounded-md" />
          <Skeleton className="w-full h-12 rounded-md" />
          <Skeleton className="w-full h-12 rounded-md" />
          <Skeleton className="w-full h-12 rounded-md" />
        </div>
      )}

      <CategoryAddButton />
    </div>
  );
};

export default MemoirList;

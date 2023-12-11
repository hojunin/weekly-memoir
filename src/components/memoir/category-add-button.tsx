'use client';
import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import useInput from '@/hooks/useInput';
import { ScrollArea } from '../ui/scroll-area';
import {
  createCategory,
  linkUserCategory,
  searchCategory,
} from '@/api/category';
import { Category } from '@/types/category';
import { useUserStore } from '@/store/user';
import { useToast } from '../ui/use-toast';

const categories = [
  '커리어',
  '재무',
  '식재료',
  '영양제',
  '식단',
  '자기개발',
  '독서',
  '당류',
  '개발',
];

const CategoryAddButton = () => {
  const { value, onChangeInput, reset } = useInput();
  const { user, categories: userCategories, updateCategories } = useUserStore();
  const { toast } = useToast();
  const onClickSelectItem = (category: string) => {
    onChangeInput({ target: { value: category } });
  };

  const onOpenChange = (isOpened: boolean) => {
    if (!isOpened) {
      reset();
    }
  };

  const onClickAdd = async () => {
    if (userCategories?.find((category) => category.title === value)) {
      toast({
        title: '이미 추가된 카테고리에요',
        variant: 'destructive',
      });
      return;
    }
    let targetCategory: Category | null = null;
    const response = await searchCategory(value);

    if (response) {
      targetCategory = response;
    } else {
      const createdCategory = await createCategory({ title: value });

      targetCategory = createdCategory;
    }

    if (targetCategory && Array.isArray(userCategories)) {
      await linkUserCategory({
        user_id: user?.id,
        category_id: targetCategory.id,
      });

      updateCategories([...userCategories, targetCategory]);
      toast({
        title: '카테고리가 추가되었어요',
      });
    }
  };

  return (
    <Dialog onOpenChange={onOpenChange}>
      <DialogTrigger>
        <Button variant={'ghost'} className="mt-4">
          + 카테고리 추가하기
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>회고 주제 추가</DialogTitle>
          <DialogDescription>
            회고 주제를 추가해주세요. 아래에서 골라주셔도 좋아요.
          </DialogDescription>
          <div className="relative flex flex-col py-5 gap-y-3">
            <Label htmlFor="category">카테고리</Label>
            <Input
              id="category"
              placeholder="커리어"
              value={value}
              onChange={onChangeInput}
            />

            <ScrollArea className="h-32 w-full rounded-md border p-4 whitespace-nowrap">
              <ul className="flex gap-x-2 gap-y-2 flex-wrap overflow-scroll">
                {categories.map((category) => (
                  <li
                    key={category}
                    className="list-none cursor-pointer"
                    onClick={() => onClickSelectItem(category)}
                  >
                    <Badge>{category}</Badge>
                  </li>
                ))}
              </ul>
            </ScrollArea>
          </div>

          <DialogFooter className="justify-end">
            <DialogClose asChild>
              <Button type="button" variant="default">
                취소
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button
                type="button"
                variant="secondary"
                disabled={!value}
                onClick={onClickAdd}
              >
                추가
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CategoryAddButton;

'use client';
import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';

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
import { Separator } from '../ui/separator';

const categories = [
  '커리어',
  '재무',
  '식재료',
  '영양제',
  '식단',
  '자기개발',
  '독서',
];

const CategoryAddButton = () => {
  const { value, onChangeInput, reset } = useInput();
  const [selectorVisible, setSelectorVisible] = useState<boolean>(false);
  const [searchedCategories, setSearchedCategories] = useState<string[]>([]);

  useEffect(() => {
    if (!value) {
      setSearchedCategories([]);
      setSelectorVisible(false);
      return;
    }
    setSelectorVisible(true);
    setSearchedCategories(filterQuery(value));
  }, [value]);

  const convertStringToComparable = (string: string) => {
    return string.toLowerCase().trim();
  };

  const filterQuery = (query: string) => {
    const preProcessedQuery = convertStringToComparable(query);
    if (preProcessedQuery.length <= 0) {
      return [];
    }
    return categories
      .map((category) => convertStringToComparable(category))
      .filter((category) => category.includes(preProcessedQuery));
  };

  const onClickSelectItem = (category: string) => {
    onChangeInput({ target: { value: category } });

    setTimeout(() => setSelectorVisible(false), 0);
  };

  const onOpenChange = (isOpened: boolean) => {
    if (!isOpened) {
      setSearchedCategories([]);
      setSelectorVisible(false);
      reset();
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
          <DialogDescription>회고 주제를 추가해주세요.</DialogDescription>
          <div className="relative flex flex-col py-5 gap-y-3">
            <Label htmlFor="category">카테고리</Label>
            <Input
              id="category"
              placeholder="커리어"
              value={value}
              onChange={onChangeInput}
            />

            {selectorVisible && searchedCategories.length > 0 && (
              <ScrollArea
                className="h-32 w-full rounded-md border p-4"
                style={{ position: 'absolute', top: '95px' }}
              >
                {searchedCategories.map((category) => (
                  <li
                    key={category}
                    className="list-none hover:opacity-70"
                    onClick={() => onClickSelectItem(category)}
                  >
                    <div className="cursor-pointer text-sm">{category}</div>
                    <Separator className="my-2" />
                  </li>
                ))}
              </ScrollArea>
            )}
          </div>

          <DialogFooter className="justify-end">
            <DialogClose asChild>
              <Button type="button" variant="default">
                취소
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button type="button" variant="secondary" disabled={!value}>
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

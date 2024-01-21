'use client';
import React, { ChangeEvent, Fragment, useEffect, useState } from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import useInput from '@/hooks/useInput';
import { Button } from '../ui/button';
import { createMemoir, updateMemoir } from '@/api/actions/memoir';
import { useMemoirStore } from '@/store/memoir';
import { Loader2 } from 'lucide-react';
import { useToast } from '../ui/use-toast';
import { useUserStore } from '@/store/user';
import useGetMemoir from '@/hooks/useGetMemoir';
import { useIsFetching, useQueryClient } from '@tanstack/react-query';
import { MEMOIRS } from '@/api/path';
import { isMemoir } from '@/types/typeGuard/memoir';

const MemoirForm = () => {
  const { activeCategory, year_week } = useMemoirStore();
  const { user } = useUserStore();
  const { toast } = useToast();
  const memoirData = useGetMemoir();
  const queryClient = useQueryClient();
  const isFetching = useIsFetching();

  useEffect(() => {
    resetInputs();
  }, [memoirData]);

  const {
    value: title,
    onChangeInput: onChangeTitle,
    reset: resetTitle,
  } = useInput({
    initialValue: memoirData?.title ?? '',
  });
  const {
    value: description,
    onChangeInput: onChangeDescription,
    reset: resetDescription,
  } = useInput({
    initialValue: memoirData?.description ?? '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const resetInputs = () => {
    resetTitle();
    resetDescription();
  };

  const onClickSubmit = async () => {
    try {
      if (!user) {
        throw Error('로그인이 필요해요');
      }
      if (!activeCategory) {
        throw Error('왼쪽 목록에서 카테고리를 선택해주세요');
      }
      setIsLoading(true);
      if (isMemoir(memoirData)) {
        updateMemoir({
          id: memoirData.id,
          title,
          description,
        });
      } else {
        await createMemoir({
          title,
          description,
          type: activeCategory?.id,
          user_id: user?.id,
          year_week,
        });
      }

      queryClient.invalidateQueries({
        queryKey: [MEMOIRS, user.id, year_week],
      });

      toast({
        title: isMemoir(memoirData)
          ? '회고가 수정되었어요'
          : '회고가 작성되었어요',
      });
    } catch (error) {
      toast({
        variant: 'destructive',
        title: '회고 작성에 실패했어요',
        description: error?.message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const onImageUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    // const image = event.target.files[0]
    // const formData = new FormData();
    // formData.append('image', image);
    // try {
    //   const response = await uploadImage(formData);
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <form className="flex flex-col w-3/4 gap-y-6 mb-20">
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        {activeCategory?.title}
      </h2>

      <Label htmlFor="title">제목</Label>
      <Input
        id="title"
        placeholder={
          Boolean(activeCategory)
            ? `이번 주의 ${activeCategory?.title} 회고!`
            : '회고 제목'
        }
        value={title}
        onChange={onChangeTitle}
        disabled={isLoading}
      />

      <Label htmlFor="description">회고록 내용</Label>
      <Textarea
        id="description"
        placeholder={activeCategory?.placeholder ?? '회고 내용'}
        value={description}
        onChange={onChangeDescription}
        disabled={isLoading}
        className="h-48"
      />
      {/* 
      <Label htmlFor="photo">사진 첨부하기</Label>
      <Input id="photo" type="file" accept="image/*" onChange={onImageUpload} /> */}

      <Button
        type="button"
        onClick={onClickSubmit}
        disabled={
          !title ||
          !description ||
          isLoading ||
          (isMemoir(memoirData) &&
            title === memoirData.title &&
            description === memoirData.description) ||
          isFetching > 0
        }
      >
        {isLoading ? (
          <Fragment>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {`회고를 ${isMemoir(memoirData) ? '수정' : '작성'}중이에요`}
          </Fragment>
        ) : (
          <>{isMemoir(memoirData) ? '수정하기' : '작성하기'}</>
        )}
      </Button>
    </form>
  );
};

export default MemoirForm;

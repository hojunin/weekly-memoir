'use client';
import React from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import useInput from '@/hooks/useInput';
import { Button } from '../ui/button';
import { createMemoir } from '@/api/actions/memoir';

const MemoirForm = () => {
  const { value: title, onChangeInput: onChangeTitle } = useInput();
  const { value: description, onChangeInput: onChangeDescription } = useInput();

  return (
    <form className="flex flex-col w-3/4 gap-y-6" action={createMemoir}>
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        재무
      </h2>

      <Label htmlFor="title">제목</Label>
      <Input
        id="title"
        placeholder="이번 주의 재무회고"
        value={title}
        onChange={onChangeTitle}
      />

      <Label htmlFor="description">회고록 내용</Label>
      <Textarea
        id="description"
        placeholder="돈이 너무 없어 야발.."
        value={description}
        onChange={onChangeDescription}
      />

      {/* <Label htmlFor="photo">사진 첨부하기</Label>
      <Input id="photo" type="file" /> */}

      <Button>작성하기</Button>
    </form>
  );
};

export default MemoirForm;

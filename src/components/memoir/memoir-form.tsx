'use client';
import React, { ChangeEvent } from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import useInput from '@/hooks/useInput';
import { Button } from '../ui/button';
import { createMemoir } from '@/api/actions/memoir';
import { uploadImage } from '@/api/image';

const MemoirForm = () => {
  const { value: title, onChangeInput: onChangeTitle } = useInput();
  const { value: description, onChangeInput: onChangeDescription } = useInput();

  const onClickSubmit = () => {
    if (!title || !description) return;

    createMemoir({
      title,
      description,
      type: '재무',
      user_id: 1,
      year_month: '2023-52',
    });
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
    <form className="flex flex-col w-3/4 gap-y-6">
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
      {/* 
      <Label htmlFor="photo">사진 첨부하기</Label>
      <Input id="photo" type="file" accept="image/*" onChange={onImageUpload} /> */}

      <Button type="button" onClick={onClickSubmit}>
        작성하기
      </Button>
    </form>
  );
};

export default MemoirForm;

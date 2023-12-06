import Image from 'next/image';
import React from 'react';

interface Props {
  title: string;
  description: string;
  image: string;
  index: number;
}

const LadingTemplate = ({ title, description, image, index }: Props) => {
  return (
    <section
      className="flex gap-x-24 items-center justify-around w-full "
      style={{
        flexDirection: index % 2 === 0 ? 'row-reverse' : 'row',
      }}
    >
      <div className="flex flex-col gap-y-6">
        <h2 className="scroll-m-20 border-b text-3xl font-semibold tracking-tight first:mt-0">
          {title}
        </h2>

        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          {description}
        </h3>
      </div>

      <Image
        src={image}
        alt="랜딩이미지 예시"
        width="320"
        height="320"
        className="rounded-lg"
      />
    </section>
  );
};

export default LadingTemplate;

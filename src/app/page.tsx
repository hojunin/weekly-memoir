import LadingTemplate from '@/components/landing';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-y-36">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-10 text-center">
        THE WEEKLY로 바뀌는 일주일
      </h1>

      <LadingTemplate
        title="일주일에 딱 1번, 돌아보고 기록해요."
        description="다양한 주제에 대해 한 주를 회고 할 수 있어요"
        image="https://i.imgur.com/rwipSiP.png"
        index={0}
      />
      <LadingTemplate
        title="리포트를 받아보세요."
        description="데이터를 모아 드려요"
        image="https://i.imgur.com/dLpaFin.png"
        index={1}
      />
      <LadingTemplate
        title="내 일주일을 소개해요"
        description="다른 사람들의 회고를 공유하고 공유받으며 배워요"
        image="https://i.imgur.com/dJa9nIm.png"
        index={2}
      />
    </main>
  );
}

import LadingTemplate from '@/components/landing';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-y-36">
      <LadingTemplate
        title="1주일에 딱 1번, 돌아보고 기록해요."
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
        title="다른 사람들의 회고를 공유하고 공유받아요."
        description="동기부여의 수단으로 삼아요"
        image="https://i.imgur.com/dJa9nIm.png"
        index={2}
      />
    </main>
  );
}

import ReportList from '@/components/report/report-list';
import React from 'react';

const memoirData = [
  {
    year: '2023',
    week: '38',
    keywords: ['도전', '투자', '감사'],
    createdAt: '2023-12-24',
  },
  {
    year: '2023',
    week: '12',
    keywords: ['성공', '계획'],
    createdAt: '2023-12-24',
  },
  {
    year: '2023',
    week: '27',
    keywords: ['성장', '관계'],
    createdAt: '2023-12-24',
  },
  {
    year: '2023',
    week: '5',
    keywords: ['도전'],
    createdAt: '2023-12-24',
  },
  {
    year: '2023',
    week: '49',
    keywords: ['투자', '관계'],
    createdAt: '2023-12-24',
  },
  {
    year: '2023',
    week: '18',
    keywords: ['도전', '계획', '감사'],
    createdAt: '2023-12-24',
  },
  {
    year: '2023',
    week: '32',
    keywords: ['성공', '투자'],
    createdAt: '2023-12-24',
  },
  {
    year: '2023',
    week: '9',
    keywords: ['성장', '감사'],
    createdAt: '2023-12-24',
  },
  {
    year: '2023',
    week: '42',
    keywords: ['도전'],
    createdAt: '2023-12-24',
  },
  {
    year: '2023',
    week: '3',
    keywords: ['투자', '관계'],
    createdAt: '2023-12-24',
  },
  {
    year: '2023',
    week: '22',
    keywords: ['성장', '계획', '감사'],
    createdAt: '2023-12-24',
  },
  {
    year: '2023',
    week: '45',
    keywords: ['성공', '투자'],
    createdAt: '2023-12-24',
  },
  {
    year: '2023',
    week: '15',
    keywords: ['성장', '감사'],
    createdAt: '2023-12-24',
  },
  {
    year: '2023',
    week: '30',
    keywords: ['도전'],
    createdAt: '2023-12-24',
  },
  {
    year: '2023',
    week: '7',
    keywords: ['투자', '관계'],
    createdAt: '2023-12-24',
  },
  {
    year: '2023',
    week: '40',
    keywords: ['성장', '계획', '감사'],
    createdAt: '2023-12-24',
  },
  {
    year: '2023',
    week: '13',
    keywords: ['성공', '투자'],
    createdAt: '2023-12-24',
  },
  {
    year: '2023',
    week: '28',
    keywords: ['성장', '감사'],
    createdAt: '2023-12-24',
  },
  {
    year: '2023',
    week: '1',
    keywords: ['도전'],
    createdAt: '2023-12-24',
  },
  {
    year: '2023',
    week: '50',
    keywords: ['투자', '관계'],
    createdAt: '2023-12-24',
  },
];

const ReportPage = () => {
  return (
    <div className="w-2/3 my-0 mx-auto">
      <h1 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        리스트
      </h1>

      <ReportList data={memoirData} />
    </div>
  );
};

export default ReportPage;

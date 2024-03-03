'use client';
import YearSelector from '@/components/memoir/year-selector';
import ReportList from '@/components/report/report-list';
import { getCurrentYear } from '@/utils/date';
import React, { useState } from 'react';

const memoirData = [
  {
    year: '2024',
    week: '38',
    keywords: ['도전', '투자', '감사'],
    createdAt: '2024-12-24',
  },
  {
    year: '2024',
    week: '12',
    keywords: ['성공', '계획'],
    createdAt: '2024-12-24',
  },
  {
    year: '2024',
    week: '27',
    keywords: ['성장', '관계'],
    createdAt: '2024-12-24',
  },
  {
    year: '2024',
    week: '5',
    keywords: ['도전'],
    createdAt: '2024-12-24',
  },
  {
    year: '2024',
    week: '49',
    keywords: ['투자', '관계'],
    createdAt: '2024-12-24',
  },
  {
    year: '2024',
    week: '18',
    keywords: ['도전', '계획', '감사'],
    createdAt: '2024-12-24',
  },
  {
    year: '2024',
    week: '32',
    keywords: ['성공', '투자'],
    createdAt: '2024-12-24',
  },
  {
    year: '2024',
    week: '9',
    keywords: ['성장', '감사'],
    createdAt: '2024-12-24',
  },
  {
    year: '2024',
    week: '42',
    keywords: ['도전'],
    createdAt: '2024-12-24',
  },
  {
    year: '2024',
    week: '3',
    keywords: ['투자', '관계'],
    createdAt: '2024-12-24',
  },
  {
    year: '2024',
    week: '22',
    keywords: ['성장', '계획', '감사'],
    createdAt: '2024-12-24',
  },
  {
    year: '2024',
    week: '45',
    keywords: ['성공', '투자'],
    createdAt: '2024-12-24',
  },
  {
    year: '2024',
    week: '15',
    keywords: ['성장', '감사'],
    createdAt: '2024-12-24',
  },
  {
    year: '2024',
    week: '30',
    keywords: ['도전'],
    createdAt: '2024-12-24',
  },
  {
    year: '2024',
    week: '7',
    keywords: ['투자', '관계'],
    createdAt: '2024-12-24',
  },
  {
    year: '2024',
    week: '40',
    keywords: ['성장', '계획', '감사'],
    createdAt: '2024-12-24',
  },
  {
    year: '2024',
    week: '13',
    keywords: ['성공', '투자'],
    createdAt: '2024-12-24',
  },
  {
    year: '2024',
    week: '28',
    keywords: ['성장', '감사'],
    createdAt: '2024-12-24',
  },
  {
    year: '2024',
    week: '1',
    keywords: ['도전'],
    createdAt: '2024-12-24',
  },
  {
    year: '2024',
    week: '50',
    keywords: ['투자', '관계'],
    createdAt: '2024-12-24',
  },
];

const ReportPage = () => {
  const [currentYear, setCurrentYear] = useState(getCurrentYear());
  const onChangeYear = (value: string) => {
    setCurrentYear(value);
  };
  return (
    <div className="w-2/3 my-0 mx-auto">
      <div className="flex items-center justify-between">
        <h1 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          {`${currentYear}년 회고 리스트`}
        </h1>

        <div className="w-60">
          <YearSelector
            currentYear={getCurrentYear()}
            onValueChange={onChangeYear}
          />
        </div>
      </div>

      <ReportList
        data={[...memoirData].map((report, index) => {
          const convertedReport = { ...report };
          convertedReport.week = String(index + 1);
          return convertedReport;
        })}
      />
    </div>
  );
};

export default ReportPage;

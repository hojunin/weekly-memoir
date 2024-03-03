'use client';
import React from 'react';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useRouter } from 'next/navigation';

interface Props {
  data: {
    year: string;
    week: string;
    keywords: string[];
    createdAt: string;
  }[];
}

const ReportList = ({ data }: Props) => {
  const router = useRouter();

  const onClickItem = (year_week: string) => {
    router.push(`/report/${year_week}`);
  };
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">연도</TableHead>
          <TableHead>주차</TableHead>
          <TableHead>키워드</TableHead>
          <TableHead className="text-right">작성일</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((invoice) => (
          <TableRow
            key={invoice.week}
            className="cursor-pointer"
            onClick={() => onClickItem(`${invoice.year}-${invoice.week}`)}
          >
            <TableCell className="font-medium">{invoice.year}</TableCell>
            <TableCell className="font-medium">{invoice.week}</TableCell>
            <TableCell>{invoice.keywords.join(', ')}</TableCell>
            <TableCell className="text-right">{invoice.createdAt}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ReportList;

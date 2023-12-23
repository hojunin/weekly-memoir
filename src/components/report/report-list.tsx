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
      <TableCaption>전체 회고록</TableCaption>
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
      {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
    </Table>
  );
};

export default ReportList;

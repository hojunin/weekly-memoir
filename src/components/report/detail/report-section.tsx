import { Memoir } from '@/types/memoir';
import React from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface Props {
  memoirData: Memoir;
}

const ReportSection = ({ memoirData }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{memoirData.title}</CardTitle>
        <CardDescription>{memoirData.type.title}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{memoirData.description}</p>
      </CardContent>
    </Card>
  );
};

export default ReportSection;

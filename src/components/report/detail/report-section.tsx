import { Memoir } from '@/types/memoir';
import React, { Fragment } from 'react';

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
        {memoirData.description.split('\n').map(
          (chunk, index) =>
            Boolean(chunk) && (
              <Fragment key={`${chunk}_${index}`}>
                <br />
                <p>{chunk}</p>
              </Fragment>
            ),
        )}
      </CardContent>
    </Card>
  );
};

export default ReportSection;

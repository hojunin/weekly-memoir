import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const YearSelector = ({
  onValueChange,
}: {
  onValueChange: (value: string) => void;
}) => {
  return (
    <Select onValueChange={onValueChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="연도를 선택해주세요" defaultValue={'2023'} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="2023">2023</SelectItem>
        <SelectItem value="2022">2022</SelectItem>
        <SelectItem value="2021">2021</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default YearSelector;

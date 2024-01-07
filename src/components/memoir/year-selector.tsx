import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const YearSelector = ({
  currentYear,
  onValueChange,
}: {
  currentYear: string;
  onValueChange: (value: string) => void;
}) => {
  return (
    <Select onValueChange={onValueChange}>
      <SelectTrigger>
        <SelectValue
          defaultValue={currentYear}
          placeholder="연도를 선택해주세요"
        ></SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="2024">2024</SelectItem>
        <SelectItem value="2023">2023</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default YearSelector;

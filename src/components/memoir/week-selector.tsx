import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const WeekSelector = ({
  weeks,
  onValueChange,
}: {
  weeks: string[];
  onValueChange: (value: string) => void;
}) => {
  return (
    <Select onValueChange={onValueChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="2023년 12월" />
      </SelectTrigger>
      <SelectContent>
        {weeks.map((week) => (
          <SelectItem key="week" value={week}>
            {week}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default WeekSelector;

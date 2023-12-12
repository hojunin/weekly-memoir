import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const WeekSelector = ({
  year,
  weeks,
  currentWeek,
  onValueChange,
}: {
  year: string;
  weeks: string[];
  currentWeek: string;
  onValueChange: (value: string) => void;
}) => {
  return (
    <Select onValueChange={onValueChange}>
      <SelectTrigger className="min-w-fit">
        <SelectValue placeholder="주차를 선택해주세요">
          {weeks[Number(currentWeek) - 1]}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {weeks.map((week, index) => (
          <SelectItem
            key={`${year}_${week}_${index}`}
            value={week}
            defaultValue={weeks[0]}
          >
            {week}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default WeekSelector;

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
  onValueChange,
}: {
  year: string;
  weeks: string[];
  onValueChange: (value: string) => void;
}) => {
  return (
    <Select onValueChange={onValueChange}>
      <SelectTrigger className="min-w-fit">
        <SelectValue
          placeholder="주차를 선택해주세요"
          defaultValue={weeks[0]}
        />
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

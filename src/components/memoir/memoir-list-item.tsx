import React from 'react';
import { Button } from '../ui/button';
import { Category } from '@/types/category';
import { BadgeCheck } from 'lucide-react';
import MemoirListItemDeleteIcon from './memoir-list-item-delete';

interface Props {
  categoryItem: Category;
  isActive: boolean;
  isDone: boolean;
  onClickItem: (item: Category) => void;
  onClickDelete: () => void;
}

const MemoirListItem = ({
  categoryItem,
  isDone,
  onClickItem,
  onClickDelete,
  isActive,
}: Props) => {
  return (
    <li className="flex items-center gap-x-2">
      <Button
        variant={isActive ? 'default' : 'secondary'}
        className="flex-1"
        onClick={() => onClickItem(categoryItem)}
      >
        {categoryItem.title}
        {isDone && <BadgeCheck color="#32cd32" className="ml-2" />}
      </Button>

      <MemoirListItemDeleteIcon
        name={categoryItem.title}
        deleteListItem={onClickDelete}
      />
    </li>
  );
};

export default MemoirListItem;

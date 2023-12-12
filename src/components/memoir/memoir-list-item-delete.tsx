import React from 'react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { X } from 'lucide-react';
import { Button } from '../ui/button';
import { DialogClose } from '@radix-ui/react-dialog';

interface Props {
  name: string;
  deleteListItem: () => void;
}

const MemoirListItemDeleteIcon = ({ name, deleteListItem }: Props) => {
  return (
    <Dialog>
      <DialogTrigger>
        <X size={16} />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{`'${name}' 카테고리 삭제`}</DialogTitle>
          <DialogDescription>
            {`이전 회고는 정상적으로 저장되지만, 다시 '${name}'를 추가하지 않는
            이상 더이상 작성하실 수 없어요. 정말 삭제하시겠어요?`}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose>
            <Button variant={'default'}>취소</Button>
          </DialogClose>
          <DialogClose>
            <Button variant="destructive" onClick={deleteListItem}>
              삭제
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MemoirListItemDeleteIcon;

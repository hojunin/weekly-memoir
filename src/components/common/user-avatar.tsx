import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { useUserStore } from '@/store/user';
import { signIn, useSession, signOut } from 'next-auth/react';
import useLogin from '@/hooks/useLogin';

const UserAvatar = () => {
  const { isLoggedIn, user, updateUser, updateCategories } = useUserStore();
  useLogin();
  const onClickAvatar = async () => {
    if (isLoggedIn) {
      // TODO 로그아웃 기능 구현

      updateUser(null);
      updateCategories(null);
      return;
    }
    await signIn('kakao');
  };

  return (
    <Avatar className="cursor-pointer" onClick={onClickAvatar}>
      {isLoggedIn && <AvatarImage src={user?.thumbnail} />}
      <AvatarFallback>HJ</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;

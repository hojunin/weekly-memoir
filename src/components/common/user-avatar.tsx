import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { useUserStore } from '@/store/user';
import useLogin from '@/hooks/useLogin';

const UserAvatar = () => {
  const { isLoggedIn, user } = useUserStore();
  const { logIn, logOut } = useLogin();

  const onClickAvatar = async () => {
    if (isLoggedIn) {
      logOut();
      return;
    }
    logIn();
  };

  return (
    <Avatar className="cursor-pointer" onClick={onClickAvatar}>
      {isLoggedIn && <AvatarImage src={user?.thumbnail} />}
      <AvatarFallback>HJ</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;

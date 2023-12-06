import { fetchUser } from '@/api/user';
import { useUserStore } from '@/store/user';
import { signIn, useSession, signOut } from 'next-auth/react';
import { useEffect } from 'react';

const useLogin = () => {
  const { updateStatus, updateUser, updateCategories } = useUserStore();
  const { data: kakao, status } = useSession();

  useEffect(() => {
    if (status === 'authenticated') {
      updateStatus(true);
      initializeUser();
      return;
    }
    if (status === 'unauthenticated') {
      updateStatus(false);
      updateCategories(null);
      updateUser(null);
    }
  }, [status]);

  const initializeUser = async () => {
    const response = await fetchUser(kakao?.user?.id);
    if (response) {
      const { user, categories } = response;
      updateUser(user);
      updateCategories(categories);
    }
  };

  const login = () => {};
  const signUp = () => {};
  const signOut = () => {};
};

export default useLogin;

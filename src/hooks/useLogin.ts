import { fetchUser } from '@/api/user';
import { useUserStore } from '@/store/user';
import { signIn, useSession, signOut } from 'next-auth/react';
import { useEffect } from 'react';

const useLogin = () => {
  const { updateStatus, updateUser, updateCategories } = useUserStore();
  const { data: kakao, status } = useSession();
  console.log('🚀 ~ file: useLogin.ts:9 ~ useLogin ~ kakao:', kakao);

  useEffect(() => {
    if (status === 'authenticated') {
      updateStatus(true);
      initializeUser();
      return;
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

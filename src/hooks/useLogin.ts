import { createUser, fetchUser } from '@/api/user';
import { useUserStore } from '@/store/user';
import { signIn, useSession, signOut } from 'next-auth/react';
import { useEffect, useState } from 'react';

const useLogin = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  const { updateUser, updateCategories } = useUserStore();
  const { data: kakao, status } = useSession();

  useEffect(() => {
    if (isInitialized) {
      return;
    }
    try {
      if (status === 'authenticated') {
        initializeUser();
        return;
      }
      if (status === 'unauthenticated') {
        updateCategories(null);
        updateUser(null);
      }
    } catch (error) {
    } finally {
      setIsInitialized(true);
    }
  }, [status, isInitialized]);

  const initializeUser = async () => {
    try {
      const response = await fetchUser(kakao?.user?.id);

      if (response) {
        const { user, categories } = response;
        updateUser(user);
        updateCategories(categories);
      }
    } catch (error) {
      if (error?.status === 404) {
        const response = await signUp();
        if (response) {
          initializeUser();
        }
      }
    }
  };

  const logIn = async () => {
    signIn('kakao');
  };

  const signUp = async () => {
    try {
      const { id, image, name } = kakao?.user;

      const response = await createUser({
        kakao_id: id,
        thumbnail: image,
        user_name: name,
      });

      return response;
    } catch (error) {}
  };

  return {
    logIn,
    logOut: signOut,
  };
};

export default useLogin;

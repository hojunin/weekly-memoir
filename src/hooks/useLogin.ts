import { createUser, fetchUser } from '@/api/user';
import { useUserStore } from '@/store/user';
import { signIn, useSession, signOut } from 'next-auth/react';
import { useEffect } from 'react';

const useLogin = () => {
  const { updateStatus, updateUser, updateCategories } = useUserStore();
  const { data: kakao, status } = useSession();

  useEffect(() => {
    if (status === 'authenticated') {
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
    updateStatus(true);
    try {
      const response = await fetchUser(kakao?.user?.id);

      if (response) {
        const { user, categories } = response;
        updateUser(user);
        updateCategories(categories);
      }
    } catch (error) {
      if (error.status === 404) {
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

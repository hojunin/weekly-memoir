import { HTTP_METHOD_TYPE } from './fetchr';

export const uploadImage = async (body: FormData) => {
  const response = await fetch('https://api.imgur.com/3/image', {
    method: HTTP_METHOD_TYPE.POST,
    body,
    headers: {
      Authorization: `Client-ID ${process.env.IMAGER_CLIENT_ID}`,
      'Content-Type': 'multipart/form-data',
    },
  });

  if (response.ok) {
    return await response.json();
  }
};

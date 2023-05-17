import { PRIVATE_IKIT_PRIVATE_KEY } from '$env/static/private';
import {
  PUBLIC_IKIT_FOLDER_NAME,
  PUBLIC_IKIT_PUBLIC_KEY,
  PUBLIC_IKIT_URL_ENDPOINT,
} from '$env/static/public';
import ImageKit from 'imagekit';

export async function load() {
  const imagekit = new ImageKit({
    publicKey: PUBLIC_IKIT_PUBLIC_KEY,
    privateKey: PRIVATE_IKIT_PRIVATE_KEY,
    urlEndpoint: PUBLIC_IKIT_URL_ENDPOINT,
  });

  const imagesCount: number = await new Promise((resolve, reject) =>
    imagekit.listFiles(
      {
        path: PUBLIC_IKIT_FOLDER_NAME,
      },
      (error, result) => {
        if (error) reject(error);
        resolve(result?.length ?? 0);
      },
    ),
  );

  return { imagesCount };
}

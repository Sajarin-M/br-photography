import { PRIVATE_IKIT_PRIVATE_KEY } from '$env/static/private';
import {
  PUBLIC_IKIT_FOLDER_NAME,
  PUBLIC_IKIT_PUBLIC_KEY,
  PUBLIC_IKIT_URL_ENDPOINT,
} from '$env/static/public';
import ImageKit from 'imagekit';
import type { FileObject } from 'imagekit/dist/libs/interfaces';

type ImageCustomMetaData = {
  order: number;
};

export async function load() {
  const imagekit = new ImageKit({
    publicKey: PUBLIC_IKIT_PUBLIC_KEY,
    privateKey: PRIVATE_IKIT_PRIVATE_KEY,
    urlEndpoint: PUBLIC_IKIT_URL_ENDPOINT,
  });

  const files = (await imagekit.listFiles({
    path: PUBLIC_IKIT_FOLDER_NAME,
  })) as FileObject[];

  if (!files) return { imageFiles: [] as FileObject[] };

  const orderedFiles = files
    .filter((f) => typeof (f.customMetadata as ImageCustomMetaData).order === 'number')
    .sort(
      (a, b) =>
        (a.customMetadata as ImageCustomMetaData).order -
        (b.customMetadata as ImageCustomMetaData).order,
    );

  return { imageFiles: orderedFiles as FileObject[] };
}

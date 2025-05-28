import * as FileSystem from 'expo-file-system';
import { Photo } from '../types/Photo';

const BASE_DIR = FileSystem.documentDirectory + 'photos/';

async function ensureDateDir(date: string): Promise<string> {
  const dir = `${BASE_DIR}${date}/`;
  const info = await FileSystem.getInfoAsync(dir);
  if (!info.exists) {
    await FileSystem.makeDirectoryAsync(dir, { intermediates: true });
  }
  return dir;
}

export async function savePhoto(tempUri: string): Promise<Photo> {
  const now = new Date();
  const date = now.toISOString().slice(0, 10);
  const dir = await ensureDateDir(date);

  const filename = `${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}.jpg`;
  const destUri = dir + filename;

  await FileSystem.moveAsync({
    from: tempUri,
    to: destUri,
  });

  return { uri: tempUri, savedUri: destUri, date };
}

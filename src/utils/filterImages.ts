/* eslint-disable @typescript-eslint/no-explicit-any */
const extensions = ['JPG', 'JPEG', 'PNG', 'HEIC', 'WEBP'];

export const filterImages = (fileInfo?: any[]) => {
  return fileInfo?.filter((file) => extensions.includes(file.fileExtension));
};

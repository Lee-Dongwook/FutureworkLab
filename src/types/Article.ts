import type { MicroCMSImage, MicroCMSContentId, MicroCMSDate } from 'microcms-js-sdk';

import type { Category } from './Category';

export type News = {
  title: string;
  description: string;
  content: string;
  thumbnail?: MicroCMSImage;
  category: Category;
};

export type Article = News & MicroCMSContentId & MicroCMSDate;

import type { MicroCMSContentId, MicroCMSDate } from 'microcms-js-sdk';

export type Category = {
  name: string;
} & MicroCMSContentId &
  MicroCMSDate;

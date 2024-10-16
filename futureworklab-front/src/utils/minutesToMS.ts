import { secondsToMS } from './secondsToMS';

export const minutesToMS = (minutes: number) => minutes * secondsToMS(60);

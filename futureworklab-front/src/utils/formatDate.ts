export const formateDate = (date: number): string => {
  return date < 10 ? `0${date}` : date.toString();
};

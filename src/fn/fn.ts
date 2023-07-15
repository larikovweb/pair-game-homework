export const getTime = (
  date1: Date | null,
  date2: Date | null
): { min: string; sec: string } => {
  if (date1 === null || date2 === null) {
    return {
      min: '00',
      sec: '00',
    };
  }
  const diffInMinutes = Math.floor(
    (date2.getTime() - date1.getTime()) / 60000
  ).toString();
  const diffInSeconds = (
    Math.floor((date2.getTime() - date1.getTime()) / 1000) -
    60 * +diffInMinutes
  ).toString();

  return {
    min:
      diffInMinutes.toString().length <= 1
        ? `0${diffInMinutes}`
        : diffInMinutes,
    sec:
      diffInSeconds.toString().length <= 1
        ? `0${diffInSeconds}`
        : diffInSeconds,
  };
};

export const shuffle = (array: any[]): any[] => {
  return array.sort(() => Math.random() - 0.5);
};

export const getTime = (
  date1: Date,
  date2: Date
): { min: string; sec: string } => {
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

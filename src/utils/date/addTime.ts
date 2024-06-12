export const addTime = (date: Date | null, time: Date | null) => {
  if (!date || !time) return null;
  const newDate = new Date(date);
  newDate.setHours(time.getHours());
  newDate.setMinutes(time.getMinutes());

  return newDate;
};

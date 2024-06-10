export const getDaysInMonth = (month: number, year: number) => (
  new Date(year, month, 0).getDate()
);

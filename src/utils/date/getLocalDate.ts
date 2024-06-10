/*
  This util used only for api
  Do not use it to render dates, use formatDate instead
*/

export const getLocalDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}-${month}-${day}`;
};

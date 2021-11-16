export const objectToArray = (data) => {
  if (!data) return [];
  return Object.values(data);
};

export const formatDate = (
  date
) => {

  return new Date(date)
    .toLocaleDateString();

};

export const capitalize = (
  text
) => {

  return text.charAt(0)
    .toUpperCase() +
    text.slice(1);

};
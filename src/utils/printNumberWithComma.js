export const printNumberWithComma = number => {
  number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

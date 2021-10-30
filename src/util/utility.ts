const LIMIT: number = 90;
const formatNumber: (num: number) => string = (num: number) =>
  num === 0 ? "_" : num < 10 ? `0${num}` : `${num}`;
export { formatNumber, LIMIT };

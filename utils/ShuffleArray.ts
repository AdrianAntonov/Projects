'use client';

const ShuffleArray = (arr: any) => {
  return arr?.sort(() => Math.random() - 0.5);
};
export default ShuffleArray;

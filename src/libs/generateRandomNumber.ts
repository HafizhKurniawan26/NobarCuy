export const generateRandomNumber = (max: number, totalCard: number) => {
  const randomStart = Math.floor(Math.random() * (max - totalCard));
  const randomEnd = randomStart + totalCard;
  return [randomStart, randomEnd];
};

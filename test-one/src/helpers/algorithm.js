//Below function takes argument and checks if it's divisible by 3, 5, and 15(to include multiples of both 3 and 5).
const algorithm = (number) => {
  if (number % 15 === 0) return 'BossHog';
  else if (number % 3 === 0) return 'Boss';
  else if (number % 5 === 0) return 'Hog';
  else return number;
};

//Export algorithm for use in index and tests.
export default algorithm;

export const adder = (numbers) => {
  if (numbers.length === 0) {
    return 0.0;
  } else {
    return numbers.reduce((pv, cv) => cv + pv);
  }
};

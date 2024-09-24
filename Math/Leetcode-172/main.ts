function trailingZeroes(n: number): number {
  let countFives = 0;
  let divisor = 5;
  while (n >= divisor) {
    countFives += Math.floor(n / divisor);
    divisor *= 5;
  }
  return countFives;
}

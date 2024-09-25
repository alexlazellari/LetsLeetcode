function plusOne(digits: number[]): number[] {
  let carriage = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    let num = digits[i];

    if (num === 9 && i === 0) {
      digits[i] = 0;
      digits.unshift(1);
      break;
    } else if (num === 9) {
      digits[i] = 0;
      carriage = 1;
    } else {
      digits[i] += 1;
      break;
    }
  }

  return digits;
}

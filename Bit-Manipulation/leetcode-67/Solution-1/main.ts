namespace Solution2 {
  function addBinary(a: string, b: string): string {
    const number1 = BigInt(`0b${a}`);
    const number2 = BigInt(`0b${b}`);

    const sum = number1 + number2;
    return sum.toString(2);
  }

  const a = "1";
  const b = "0";

  console.log(addBinary(a, b));
}

namespace Solution1 {
  function addBinary(a: string, b: string): string {
    let bitSum = "";
    let carriage = 0;

    const smallest = a.length >= b.length ? b : a;
    const largest = a.length >= b.length ? a : b;

    for (let i = smallest.length - 1; i >= 0; i--) {
      const result = bitAddition(
        smallest.charAt(i),
        largest.charAt(i + (largest.length - smallest.length)),
        carriage
      );

      bitSum += result[0];
      carriage = result[1];
    }

    for (let i = largest.length - smallest.length - 1; i >= 0; i--) {
      const result = bitAddition(largest.charAt(i), "0", carriage);
      bitSum += result[0];
      carriage = result[1];
    }

    if (carriage) {
      bitSum += "1";
    }

    return bitSum.split("").reverse().join("");
  }

  /**
   *
   * @throws an Error "Unexpected bit addition value" if bits are not one or zero
   */
  function bitAddition(
    bit1: string,
    bit2: string,
    carriage: number
  ): [string, number] {
    if (bit1 === "0" && bit2 === "0") {
      return carriage === 1 ? ["1", 0] : ["0", 0];
    } else if (bit1 === "1" && bit2 === "1") {
      return carriage === 1 ? ["1", 1] : ["0", 1];
    } else if (
      (bit1 === "1" && bit2 === "0") ||
      (bit1 === "0" && bit2 === "1")
    ) {
      return carriage === 1 ? ["0", 1] : ["1", 0];
    } else {
      throw new Error("Unexpected bit addition value");
    }
  }

  const a = "1";
  const b = "0";
  console.log(addBinary(a, b));
}

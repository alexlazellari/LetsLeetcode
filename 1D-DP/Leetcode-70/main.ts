function climbStairs(n: number): number {
  if (n === 0) return 0;
  const arr = new Array(n + 1).fill(0);
  arr[0] = 1;
  arr[1] = 1;
  for (let i = 2; i <= arr.length - 1; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[arr.length - 1];
}

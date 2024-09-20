function singleNumber(nums: number[]): number {
  return nums.reduce((acc, val) => (acc ^= val), 0);
}

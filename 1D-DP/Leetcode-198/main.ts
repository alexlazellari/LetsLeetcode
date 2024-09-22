function rob(nums: number[]): number {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  let prevNMinus2 = nums[0];
  let prevNMinus1 = Math.max(nums[0], nums[1]);
  let current = prevNMinus1;
  for (let i = 2; i < nums.length; i++) {
    current = Math.max(prevNMinus1, nums[i] + prevNMinus2);
    prevNMinus2 = prevNMinus1;
    prevNMinus1 = current;
  }
  return current;
}

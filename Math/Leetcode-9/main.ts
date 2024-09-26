function isPalindrome(x: number): boolean {
  if (x < 0) return false;
  if (x === 0) return true;
  let original = x;
  let reversed = 0;
  while (original > 0) {
    let digit = original % 10;
    reversed = reversed * 10 + digit;
    original = Math.floor(original / 10);
  }
  return reversed === x;
}

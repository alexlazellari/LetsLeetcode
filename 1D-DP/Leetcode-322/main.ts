function coinChange(coins: number[], amount: number): number {
  const dp = new Array(amount).fill(10e5);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    let min = 10e5;
    for (const coin of coins) {
      if (coin > i) continue;
      if (min > dp[i - coin]) {
        min = dp[i - coin];
      }
    }
    dp[i] = min + 1;
  }
  return dp[dp.length - 1] === 10e5 + 1 ? -1 : dp[dp.length - 1];
}

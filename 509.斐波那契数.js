/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  // 递归，无数个二叉树
  // if (n <= 1) {
  //   return n;
  // }
  // return fib(n - 1) + fib(n - 2);

  // 动态规划 O(n)
  // const dp = [0, 1]; // 采用初始化条件以及递推公式，来优化上面的递归方法
  // for (let i = 2; i <= n; i++) {
  //   dp[i] = dp[i - 1] + dp[i - 2];
  // }
  // return dp[n];

  // 继续优化，将数组优化成2个数字 O(1)
  // dp = [1, 2], [3, 5], [8, 13]...
  if (n <= 1) {
    return n;
  }
  let dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp = [dp[1], dp[0] + dp[1]];
  }
  return dp[1];
};
// @lc code=end

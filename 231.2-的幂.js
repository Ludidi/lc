/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2 的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  return n > 0 && (n & (n - 1)) === 0;
};
// @lc code=end

// 2的幂次方
10;
100;
1000;

// n - 1
01;
011;
0111;

/**
 * 然后再用 & 对比
 * 10 & 01 => 00
 * 100 & 011 => 000
 * 1000 & 0111 => 0000
 */

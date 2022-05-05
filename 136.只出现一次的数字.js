/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let result = 0;
  nums.forEach((num) => {
    result ^= num;
  });
  return result;
};
// @lc code=end
/**
 * [10, 10, 01]
 *
 * 00 ^ 10 => 10 => 2
 * 10 ^ 10 => 00 => 0
 * 00 ^ 01 => 01 => 1
 * result = 1
 */

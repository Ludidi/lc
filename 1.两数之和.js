/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  debugger;
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const sub = target - num;
    if (num in obj) {
      return [obj[num], i];
    } else {
      obj[sub] = i;
    }
  }
};
// @lc code=end

// twoSum([2, 7, 11, 15], 9);

/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) return []; // [0, 0] => []

  let list = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      continue; // 之前计算过的，需要跳过
    }

    // 以nums[i]为基准，找另外两个数的和
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      if (right === i) {
        right--; // 越过当前基准数nums[i]
      } else if (nums[i] + nums[left] + nums[right] === 0) {
        // 找到结果
        list.push([nums[i], nums[left], nums[right]]);
        // 继续找
        // left
        while (nums[left] === nums[left + 1]) {
          left++; // 因为排序了，防止找到重复的
        }
        left++;
        // right
        while (nums[right] === nums[right - 1]) {
          right--; // 因为排序了，防止找到重复的
        }
        right--;
      } else if (nums[i] + nums[left] + nums[right] > 0) {
        // 结果大于0，需要把数字再小一点
        right--;
      } else {
        // 结果小于0，需要把数字再大一点
        left++;
      }
    }
  }

  return list;
};
// @lc code=end

/**
 * 先取一个基准数，然后让剩下的数组进行排序
 * 通过双指针相加判断是否与这个基准数为0
 */
const arr = threeSum([-1, -2, 0, -2, -2, 1, 3, 4, 5]);
console.log(arr);

/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let list = [];
  backtrack(list, [], nums);
  return list;
};

function backtrack(list, temp, nums) {
  // 终止条件
  if (temp.length === nums.length) {
    return list.push([...temp]);
  }

  // 递归
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (temp.includes(num)) {
      continue;
    }

    /**
     * temp = []
     * temp = [1]
     *  backtrack
     *    temp = [1, 2]
     *      backtrack
     *        temp = [1, 2, 3] 终止
     *      pop
     *    temp = [1, 3]
     *      backtrack
     *        temp = [1, 3, 2] 终止
     *  pop
     *    temp = [2]
     *    backtrack
     *    ...
     */
    temp.push(num);
    backtrack(list, temp, nums);
    temp.pop();
  }
}
// @lc code=end

// 回溯算法思想
/**
 * 类似深度搜索
 * 1.终止条件
 * 2.分析
 *   - 递归
 *      放进去一个元素
 *      执行递归公式
 *      撤回这个元素
 */

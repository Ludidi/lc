/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const arr = path.split('/');
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (item === '..') {
      result.pop();
    } else if (item && item !== '.') {
      result.push(item);
    }
    // if (!arr[i] || arr[i] === '.') {
    //   continue;
    // } else if (arr[i] === '..') {
    //   result.pop();
    // } else {
    //   result.push(arr[i]);
    // }
  }

  return '/' + result.join('/');
};
// @lc code=end

/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const result = [];
  const symbol = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  // const symbolValues = Object.values(symbol);

  for (let i = 0, len = s.length; i < len; i++) {
    const item = s[i];
    if (item in symbol) {
      result.push(item);
    } else if (item !== symbol[result.pop()]) {
      return false;
    }
    // if (symbolValues.includes(s[i])) {
    //   const last = result.pop();
    //   if (symbol[last] !== s[i]) {
    //     return false;
    //   }
    // } else {
    //   result.push(s[i]);
    // }
  }

  return !result.length;
};
// @lc code=end

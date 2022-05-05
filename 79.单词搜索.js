/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  if (board.length === 0) {
    return false;
  }
  if (word.length === 0) {
    return true;
  }

  const row = board.length;
  const col = board[0].length;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      const ret = find(i, j, 0);
      if (ret) return true;
    }
  }

  return false;

  /**
   * 回溯递归
   * @param {number} i 行索引
   * @param {number} j 列索引
   * @param {number} cur word索引
   */
  function find(i, j, cur) {
    // 边界
    if (i >= row || i < 0) {
      return false;
    } else if (j >= col || j < 0) {
      return false;
    }

    const letter = board[i][j]; // 当前值
    if (letter !== word[cur]) {
      return false;
    }
    if (cur === word.length - 1) {
      // 匹配到最后一个时，直接true，代表已经匹配成功
      return true;
    }

    board[i][j] = null; // 当前选择的置空，后面递归的时候就不能往回找了，继续往其他方向查找
    const ret =
      find(i + 1, j, cur + 1) || find(i - 1, j, cur + 1) || find(i, j + 1, cur + 1) || find(i, j - 1, cur + 1);
    board[i][j] = letter; // 回溯

    return ret;
  }
};
// @lc code=end

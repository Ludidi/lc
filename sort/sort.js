var arr = [3, 2, 5, 4, 1];

/**
 * 冒泡排序 O(n^2)
 * @param {number[]} arr
 * @returns
 */
function bubbleSort(arr) {
  const len = arr.length - 1; // 最后肯定是最大的，所以不需要再遍历了
  for (let j = 0; j < len; j++) {
    for (let i = 0; i < len - j; i++) {
      // len - j，是因为初次遍历后，最大的都在后面，只需要遍历前面部分的
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
  }
  return arr;
}
// console.log(bubbleSort(arr));

/**
 * 采用二分思想进行快速排序
 * 时间：O(log * n)
 * 空间: O(log * n) 占用比较多
 * @param {number[]} arr
 * @returns
 */
function quickSort(arr) {
  if (arr.length < 2) return arr;

  let flag = arr[0];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < flag) {
      left.push(arr[i]);
    } else if (arr[i] > flag) {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat(flag, quickSort(right));
}
// console.log(quickSort(arr));

/**
 * 原地快排 优化二分思想
 * @param {number[]} arr
 * @param {number} start
 * @param {number} end
 * @returns
 */
function quickSort1(arr, start, end) {
  if (start < end) {
    let index = quick1(arr, start, end);
    // 递归操作左右两个数组
    quickSort1(arr, start, index - 1);
    quickSort1(arr, index, end);
  }
  return arr;
}

function quick1(arr, start, end) {
  // 双指针
  let init = start;
  let flag = arr[init];
  start++;
  // 判断左指针是否小于右指针，否则则表示遍历结束
  while (start <= end) {
    // 判断右边的数是否大于基准
    while (arr[end] > flag) {
      end--;
    }
    // 判断左边的数是否小于基准
    while (arr[start] < flag) {
      start++;
    }
    if (start < end) {
      // 双指针交换，继续移动指针
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }

  // 交换基准数
  [arr[init], arr[start - 1]] = [arr[start - 1], arr[init]];
  return start;
}
console.log(quickSort1(arr, 0, arr.length - 1));

const str = 'hello';
// console.log(str.padStart(10, '0')); // 00000hello

/**
 * 模拟padStart
 * 在原生没有出来之前
 * 这种写法是有很大的性能问题
 */
function leftpad(str, length, ch) {
  let len = length - str.length + 1;
  return Array(len).join(ch) + str;
}
// console.log(leftpad(str, 10, '0')); // 00000hello

// 采用二分法和位运算来优化
function leftpad2(str, length, ch) {
  debugger;
  let len = length - str.length; // 5
  let total = '';

  while (true) {
    // len % 2 === 1
    // len = 5 , 2 , 1
    // 101 & 001 = 001 , 010 & 001 = 000 , 001 & 001 = 001
    if (len & 1) {
      total += ch; // total = 0 , total = 00000
    }

    if (len === 1) {
      return total + str; // 00000hello
    }

    ch += ch; // 00 , 0000
    len = len >> 1; // 101 >> 1 = 2 , 010 >> 1 = 1
  }
}
console.log(leftpad2(str, 10, '0')); // 00000hello

// 测试性能
// console.time('leftpad');
// for (let i = 0; i < 10000; i++) {
//   leftpad(str, 1000, '0');
// }
// console.timeEnd('leftpad'); // 68.637ms

// console.time('leftpad2');
// for (let i = 0; i < 10000; i++) {
//   leftpad2(str, 1000, '0');
// }
// console.timeEnd('leftpad2'); // 2.484ms

// console.time('padStart');
// for (let i = 0; i < 10000; i++) {
//   str.padStart(1000, '0');
// }
// console.timeEnd('padStart'); // 3.381ms

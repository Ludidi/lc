/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  const ele = {
    // 哨兵节点 哨兵=>1=>2=>3
    next: head,
  };

  let p = ele;
  while (p.next) {
    if (p.next.val === val) {
      p.next = p.next.next;
    } else {
      p = p.next;
    }
  }

  return ele.next;
};
// @lc code=end

/* 
if (head === null) {
    return head;
  }

  head.next = removeElements(head.next, val);
  return head.val === val ? head.next : head;
*/

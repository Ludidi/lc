class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkNodeList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(val) {
    let node = new Node(val);
    let p = this.head;
    if (this.head) {
      // 找到链表最后一个节点，把这个节点的next属性赋值给node
      while (p.next) {
        p = p.next;
      }
      p.next = node;
    } else {
      // 如果没有head节点，则链表是空，把要创建的节点赋值给head
      this.head = node;
    }
    this.length++;
  }

  toString() {
    let p = this.head;
    let result = '';
    if (this.head) {
      while (p.next) {
        result += `${p.val}=>`;
        p = p.next;
      }
      result += p.val;
      return result;
    } else {
      return '';
    }
  }
}

var linkNodeList = new LinkNodeList();

linkNodeList.append(1);
linkNodeList.append(2);
linkNodeList.append(3);
linkNodeList.append(4);

console.log(linkNodeList);
console.log(linkNodeList.length);
console.log(linkNodeList.toString());

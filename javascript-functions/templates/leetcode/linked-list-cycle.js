class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function push(head, value) {
  const newNode = new Node(value);
  let curr = head;
  while (curr !== null) {
    curr = curr.next;
  }
  curr.next = newNode;
  return curr;
}

function detectLoop(head) {
  const dict = new Set();
  let curr = head;
  while (curr !== null) {
    if (dict.has(curr)) {
      return true;
    }
    dict.add(curr);
    curr = curr.next;
  }
  return false;
}

class NodeStruct2 {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.flag = 0;
  }
}

function detectLoop2(head) {
  let curr = head;
  while (curr !== null) {
    if (curr.flag === 1) {
      return true;
    }
    curr.flag = 1;
    curr = curr.next;
  }
  return false;
}

function detectLoop3(head) {
  let curr1 = head;
  let curr2 = head;
  while ((curr1 !== null) & (curr2.next !== null)) {
    if (curr1 === curr2) {
      return true;
    }
    curr1 = curr1.next;
    curr2 = curr2.next.next;
  }
  return false;
}

function detectLoopAndClear(head) {}

const head = new Node(1);

const node2 = new Node(2);

const node3 = new Node(3);

const node4 = new Node(4);

const node5 = new Node(5);

head.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node2;

const head2 = new NodeStruct2(1);

const node22 = new NodeStruct2(2);

const node23 = new NodeStruct2(3);

const node24 = new NodeStruct2(4);

const node25 = new NodeStruct2(5);

head2.next = node22;
node22.next = node23;
node23.next = node24;
node24.next = node25;
node25.next = node22;

console.log(detectLoop2(head2));

console.log(detectLoop3(head));

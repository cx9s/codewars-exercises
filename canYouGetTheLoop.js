function loop_size(node) {
  let slowN = node;
  let fastN = node;
  let size = 0;
  const findSize = (node) => {
    size++;
    let startN = node;
    while (node.next != startN) {
      node = node.next;
      size++;
    }
  };
  while (true) {
    if (slowN.next != null && fastN.next.next != null && slowN != fastN.next) {
      slowN = slowN.next;
      fastN = fastN.next.next;
    } else if (slowN == fastN.next) {
      break;
    } else return size;
  }
  findSize(slowN);
  return size;
}

class Node {
  constructor() {
    this.next;
    this.setNext = (node) => (this.next = node);
    this.getNext = () => this.next;
  }
}
const A = new Node(),
  B = new Node(),
  C = new Node();
A.setNext(B), B.setNext(C), C.setNext(A);
console.log(loop_size(A));

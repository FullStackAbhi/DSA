class Node {
  constructor(data) {
    this.data = data;
    this.next = next;
  }
}

class Linkedlist {
  constructor() {
    this.head = null;
  }

  addfirst(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    newNode.head = newNode;
  }
  addLast(data) {
    const newNode = newNode(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  addAt(data,index){
    if(index <0 || index > this.size)
  }
}

// ===================================================================% QUEUE %=========================================================================

// enqueue(elem) => adding the element inside a queue from the very back of the queue => push()
// dequeue() => remove the first element => remove from the starting side =>shift()
// Queue run on principle F I F O (first in first out)
// peek()/front() => current front element => means element at 0th index
// isEmpty() => check if the queue is empty or not
// size() => the current size of our queue

// class Queue {
//   constructor() {
//     this.queue = [];
//   }
//   enqueue(elem) {
//     this.queue.push(elem);
//   }
//   dequeue() {
//     if (this.isEmpty()) {
//       return "Underflow";
//     }
//     this.queue.shift();
//   }
//   isEmpty() {
//     return this.size() == 0;
//   }
//   front() {
//     if (this.isEmpty()) {
//       return "No ELement in the queue";
//     }
//     return this.queue[0];
//   }
//   size() {
//     return this.queue.length;
//   }
//   printQueue() {
//     let queueSting = "";
//     for (let i = 0; i < this.size(); i++) {
//       queueSting += this.queue[i] + ", ";
//     }
//     console.log("Queue: " + queueSting);
//   }
// }

// const myqueue = new Queue();
// myqueue.enqueue(5);
// myqueue.enqueue(599);
// myqueue.enqueue(98);
// myqueue.enqueue(677);
// myqueue.enqueue(71);
// myqueue.dequeue();
// myqueue.dequeue();
// console.log(myqueue.printQueue());
// console.log(myqueue.front());

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>...

//  Qus-1 Design your implementation of the circular queue ?

//  The circular queue is a linear data structure
//  in which the operations are performed based on FIFO (First In First Out) principle,
//  and the last position is connected back to the first position to make a circle. It is also called "Ring Buffer".

// One of the benefits of the circular queue is
// that we can make use of the spaces in front of the queue.
//  In a normal queue, once the queue becomes full,
//  we cannot insert the next element even if there is a space in front of the queue.
//   But using the circular queue, we can use the space to store new values.

// var MyCircularQueue = function (k) {
//   this.queue = [];
//   this.size = k;
// };
// MyCircularQueue.prototype.enqueue = function (value) {
//   if (this.size === this.queue.length) return false;
//   this.queue.push(value);
//   return true;
// };
// MyCircularQueue.prototype.dequeue = function () {
//   if (this.queue.length === 0) return false;
//   this.queue.shift();
//   return true;
// };

// MyCircularQueue.prototype.Front = function () {
//   if (this.queue.length === 0) return -1;
//   return this.queue[0];
// };

// MyCircularQueue.prototype.Rear = function () {
//   if (this.queue.length === 0) return -1;
//   return this.queue[this.queue.length - 1];
// };

// MyCircularQueue.prototype.isEmpty = function () {
//   return this.queue.length === 0;
// };

// MyCircularQueue.prototype.isFull = function () {
//   return this.size === this.queue.length;
// };

// var obj = new MyCircularQueue(4);

// obj.enqueue(1);
// obj.enqueue(2);
// obj.enqueue(3);
// obj.enqueue(234);
// obj.dequeue();
// obj.enqueue(5);
// obj.dequeue();

// console.log(obj.Front(), obj.Rear());

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>......

// Qus-2 Implement Stack using Queues
// Implement a last - in - first - out(LIFO) stack using only two queues.
// The implemented stack should support all the functions of a stack (push,top,pop and empty)

// var MyStack = function () {
//   this.q1 = [];
//   this.q2 = [];
// };
// // [2,3]

// MyStack.prototype.push = function (x) {
//   while (this.q1.length !== 0) {
//     this.q2.push(this.q1.shift());
//   }
//   this.q1.push(x);
//   while (this.q2.length !== 0) {
//     this.q1.push(this.q2.shift());
//   }
// };

// MyStack.prototype.pop = function () {
//   return this.q1.shift();
// };

// MyStack.prototype.top = function () {
//   return this.q1[0];
// };

// MyStack.prototype.empty = function () {
//   return this.q1.length === 0;
// };

// var stack = new MyStack();

// stack.push(2);
// stack.push(78);
// stack.push(5);
// console.log(stack.pop());

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Qus 3. Implement Queue using stack
// Implement a first in first out(FIFO) using only two stacks.
// Implemented queue should have all functions of queue(enqueue,front,dequeue ,and empty).

var MyQueue = function () {
  this.stack1 = [];
  this.stack2 = [];
};
// stack1 = [2,3,4]
// stack2 = [4,3,2] => dequeue => 2
MyQueue.prototype.enqueue = function (x) {
  this.stack1.push(x);
};
MyQueue.prototype.dequeue = function () {
  if (this.stack2.length === 0) {
    while (this.stack1.length > 0) {
      this.stack2.push(this.stack1.pop());
    }
  }
  return this.stack2.pop();
};
MyQueue.prototype.front = function () {
  if (this.stack2.length === 0) {
    while (this.stack1.length > 0) {
      this.stack2.push(this.stack1.pop());
    }
  }
  return this.stack2[this.stack2.length - 1];
};
MyQueue.prototype.empty = function () {
  return this.stack1.length === 0 && this.stack2.length === 0;
};

let queue = new MyQueue();

queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.dequeue();
queue.dequeue();
console.log(queue.front());

// =============================================================% STACK %========================================================================

// push , pop , peak , isEmpty , size
// Stack work on principle of L I F O i.e (last in first out)
// Stack is like a bottel we put something at list should always comes out first. like we can say a stack of homework copy on the teachers table.
// push() => allow to push something inside a Stack.
// pop() => remove something from the Stack.
// peak() => allows us to see which element is currently on the top.
// isEmpty() => tells that the Stack is empty or not
// size() => how many element are currently inside the Stack.

// class Stack {
//   constructor() {
//     this.Stack = [];
//   }
//   push(element) {
//     this.Stack.push(element);
//   }
//   pop() {
//     if (this.isEmpty()) {
//       return "Stack is Empty can't perform pop";
//     }
//     return this.Stack.pop();
//   }
//   peek() {
//     if (this.isEmpty()) {
//       return "Stack is Empty can't perform peek";
//     }
//     return this.Stack[this.size() - 1];
//   }
//   isEmpty() {
//     return this.size() === 0;
//   }
//   size() {
//     return this.Stack.length;
//   }
//   printStack() {
//     return stack;
//   }
// }

// const stack = new Stack();
// stack.push(10);
// stack.push(89);
// stack.push(420);

// console.log(stack.peek());
// stack.pop();
// console.log(stack.peek());
// stack.pop();
// console.log(stack.peek());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.peek());
// console.log(stack.printStack());
// stack.pop();

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// reverse words in string

// function reverseWords(str) {
//   const splitS = str.split(" ");
//   const stack = [];

//   for (let i of splitS) {
//     stack.push(i);
//   }
//   let finalS = "";
//   while (stack.length) {
//     let current = stack.pop();
//     if (current) {
//       finalS += " " + current;
//     }
//   }
//   return finalS.trim();
// }

// console.log(reverseWords("the sky is blue"));

// time complexity = O(2n) => O(n)
// Space complexity => O(n)

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>..

// Valid parenthesis

function isValid(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      if (isEmpty(stack)) {
        return false;
      }
      const top = stack.pop();
      if (
        (char === ")" && top !== "(") ||
        (char === "]" && top !== "[") ||
        (char === "}" && top !== "{")
      ) {
        return false;
      }
    }
  }
  return isEmpty(stack);
}
function isEmpty(stack) {
  return stack.length === 0;
}

const string1 = "(]";
console.log(isValid(string1));

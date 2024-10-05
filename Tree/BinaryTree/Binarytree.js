class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// const e = new Node("e");
// const f = new Node("f");

const a = new Node(2);
const b = new Node(3);
const c = new Node(4);
const d = new Node(5);
const e = new Node(6);
const f = new Node(7);
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       a
//      / \
//     b   c
//    / \   \
//   d   e   f

// DFS first go depper then across
// a -> b -> ->d -> e -> c -> f

// 1.                            ## Iterative Approach
// const depthfirstValue = (root) => {
//   const stack = [root];
//   while (stack.length !== 0) {
//     const current = stack.pop();
//     console.log(current.val);

//     if (current.right) {
//       stack.push(current.right);
//     }

//     if (current.left) {
//       stack.push(current.left);
//     }
//   }
// };

// depthfirstValue(a);//a,b,d,e,c,f

//                                   ## 2. RECURSIVE
// const depthfirstValue = (root) => {
//   if (root === null) return [];
// //   root.val  => a
// //   depthfirstValue(root.left) => b,d,e
// //   depthfirstValue(root.right) => c,f

//   return [
//     root.val,
//     ...depthfirstValue(root.left),
//     ...depthfirstValue(root.right),
//   ];
// };

// console.log(depthfirstValue(a)); //a,b,d,e,c,f

//                     Bredth first Search
// iterative

// const bredthFirstSearch = (root) => {
//   if (root === null) return [];
//   const value = [];
//   const queue = [root];

//   while (queue) {
//     let current = queue.shift();
//     value.push(current);
//     if (current.left) {
//       queue.push(current.left);
//     }
//     if (current.right) {
//       queue.push(current.right);
//     }
//   }
//   return value;
// };

// find target

// Iterative
// const findTarget = (root, target) => {
//   const queue = [root];

//   while (queue.length) {
//     let current = queue.shift();
//     if (current.val === target) return true;
//     if (current.left) {
//       queue.push(current.left);
//     }
//     if (current.right) {
//       queue.push(current.right);
//     }
//   }
//   return false;
// };

// console.log(findTarget(a, "f"));

// Recursive

// const findTargetRecursive = (root, target) => {
//   if (root === null) return false;
//   if (root.val === target) return true;
//   return (
//     findTargetRecursive(root.left, target) ||
//     findTargetRecursive(root.right, target)
//   );
// };

// console.log(findTargetRecursive(a, "f"));

//                                   ## TREE SUM
//                   RECURSIVE

// const treeSum = (root) => {
//   if (root === null) return 0;
//   return root.val + treeSum(root.left) + treeSum(root.right);
// };

// console.log(treeSum(a));

//   ## FInd minimum
//                       ##RECURSIVE

// const findMin = (root) => {
//   if (root === null) return Infinity;
//   return Math.min(root.val, findMin(root.left), findMin(root.right));
// };

// console.log(findMin(a));

const binary = (n) => {
  let res = ""
  while (n != 1) {
    if (n % 2 === 1) res += "1";
    else {
      res += "0";
    }
    
    n = Math.round(n / 2);
    // console.log(n);
  }
  console.log(res);
};
binary(11);

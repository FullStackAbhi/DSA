// Implementing bubble sort in  js
// Bubble sort  => push the maximum to the last 
// Write a function to sort the given array nums in ascending order.
// Input: nums = [29,10,14,37,14]  ==> Output : [10,14,14,29,37]
// sort array in place

const BubbleSort = function (nums) {
  let n = nums.length;
  for (let i = 0; i < n; i++) { //n
    for (let j = 0; j < n - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
  return nums;
};

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>...

// const BubbleSort = (nums) => {
//   let n = nums.length
//   for (let i = n - 1; i >= 1; i--) {
//     for (let j = 0; j <= i - 1; j++) {
//       if (nums[j] > nums[j+1]) {
//         let temp = nums[j+1];
//         nums[j+1] = nums[j];
//         nums[j] = temp;
//       }
//     }
//   }
//   return nums;
// };

console.log(BubbleSort([29, 10, 14, 37, 14]));

// Time Complexity 
// BEst => O(n)
// Worst => O(n*2)
// Avg => O((n/2) * n) => O(n*2)

// Space Complexity = we are taking array as input
// not creating a new array so the space complexity is O(1) 

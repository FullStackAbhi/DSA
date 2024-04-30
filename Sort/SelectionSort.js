// Implementing Selection sort in  js
// Write a function to sort the given array nums in ascending order.
// Input: nums = [29,10,14,37,14]  ==> Output : [10,14,14,29,37]

const SelectionSort = function (nums) {
  let n = nums.length;
  for (let i = 0; i < n -1; i++) { //n
  let minIndex= i
    for (let j = i + 1; j < n ; j++) {
      if(nums[j] < nums[minIndex]){
        minIndex = j
      }
    }
    if(minIndex !== i){
        [nums[i] ,nums[minIndex]] = [nums[minIndex] , nums[i]] 
    }
  }
  return nums;
};

console.log(SelectionSort([29, 10, 14, 37, 14]));

// Time Complexity => O(n)
// Space Complexity = we are taking array as input
// not creating any new array so the space complexity is O(1) 

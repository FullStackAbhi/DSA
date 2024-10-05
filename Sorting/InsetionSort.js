// Implementing bubble sort in  js
// Write a function to sort the given array nums in ascending order.
// Input: nums =[10, 14, 14, 29, 33, 8, 37, 11] ==> Output :[8, 10, 11, 14, 14, 29, 33, 37]

// function insertionSortList(arr) {
//   let n = arr.length;
//   for (let i = 1; i < n; i++) {
//     let key = arr[i];
//     let j = i - 1;
//     while (j >= 0 && arr[j] > key) {
//       arr[j + 1] = arr[j];
//       j--;
//     }
//     arr[j + 1] = key;
//   }
//   return arr;
// }

// const insertionSortList = (nums) => {
//   let n = nums.length;
//   for (let i = 0; i < n; i++) {
//     let j = i;

//     while (j > 0 && nums[j - 1] > nums[j]) {
//       [nums[j - 1], nums[j]] = [nums[j], nums[j - 1]];
//       j--;
//     }
//   }
//   return nums
// };

function insertionSortList(arr) {
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        let j = i;
        while (j > 0 && arr[j] < arr[j - 1]) {
            [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
            j--;
        }
    }
    return arr
}

console.log(insertionSortList([10, 14, 14, 29, 33, 8, 37, 11]));

//key =[8] , j = 4

// Time Complexity
// BEst => O(n)
// Worst => O(n*2)
// Avg => O((n/2) * n) => O(n*2)

// Space Complexity = we are taking array as input
// not creating a new array so the space complexity is O(1)

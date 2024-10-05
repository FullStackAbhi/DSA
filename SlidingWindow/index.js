// 1.Constant Window

// given an array and a num k find max sum of consecutive k element in the array
// max subarray : https://leetcode.com/problems/maximum-subarray/description/

// function maxsum(arr, k) {
//   let left = 0;
//   let right = k - 1;
//   let sum = 0;
//   for (let i = left; i <= right; i++) {
//     sum += arr[i];
//     // console.log(arr[i]);
//   }
//   let maxsum = sum;
//   console.log(maxsum);

//   while (right < arr.length - 1) {
//     sum = sum - arr[left];
//     left++;
//     right++;
//     sum = sum + arr[right];

//     maxsum = Math.max(maxsum, sum);
//   }
//   return maxsum;
// }
// maxsum([-1, 2, 3, 3, 4, 5, -1], 4);


// 2 )Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
//  var maxSubArray = function(nums) {
//     let max = nums[0]
//     let sum = 0
//     for(let item of nums){
//         sum += item
//         if(sum > max){
//             max = sum
//         }if(sum < 0){
//             sum = 0
//         }
//     }
//     return max
// };

// 2.Longest subarray  / substring with <some condition>




// var maximumCount = function (nums) {
//   return Math.max(upperbond(nums), lowerbond(nums));
// };
// function upperbond(nums) {
//   let low = 0;
//   let high = nums.length - 1;
//   while (low < high) {
//     let mid = Math.ceil((low + high) / 2);
//     if (nums[mid] < 0) low = mid;
//     else high = mid - 1;
//   }

//   return nums[0] >= 0 ? 0 : low + 1;
// }

// function lowerbond(nums) {
//   let low = 0;
//   let high = nums.length - 1;
//   while (low < high) {
//     let mid = Math.floor((low + high) / 2);
//     if (nums[mid] > 0) high = mid;
//     else low = mid + 1;
//   }
//   return nums[nums.length - 1] <= 0 ? 0 : nums.length - low;
// }

// console.log(maximumCount([-3, -2, -1, 0, 0, 1, 2]));

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>..
//  Search in Rotated Sorted Array II
// var search = function (nums, target) {
//     let start = 0;
//     let end = nums.length -1;

//     while (start <= end) {
//         let mid = Math.floor((start + end) / 2);
//         if (nums[mid] == target) return true;
//         if (nums[mid] == nums[start]) {
//             start++
//             continue
//         }
//        else if(nums[start] < nums[mid]){
//         if(target >= nums[start] && target < nums[mid]){
//             end = mid -1
//         }else start = mid  + 1
//        }else{
//         if(target > nums[mid] && target <= nums[end]){
//             start = mid +1
//         }else end = mid-1
//        }
//     }
//     return false

// };

// search([2,5,6,0,0,1,2],0)
// search([2,5,6,0,0,1,2],3)

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

var numRescueBoats = function (people, limit) {
  people.sort(); //[1,2,2,3]
  let boat = 0;
  let left = 0;
  let right = people.length - 1;
  while (left <= right) {
    if (people[left] + people[right] <= limit) {
      left++;
    } else {
      right--;
      boat++;
    }
  }
  console.log(boat);
};

numRescueBoats([2, 1], 3);

// numRescueBoats([3, 5, 3, 4], 5);
// numRescueBoats([2, 1], 3);

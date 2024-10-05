// 1.Two sum

// function twoSum(nums, target) {
//   const map = new Map();
// console.log(map);
// for (let index in nums) {
//   console.log(index);
//   const pairTarget = target - nums[index];
//   console.log(pairTarget);
//   if (map.has(pairTarget)) {
//     return [index, map.get(pairTarget)];
//   }
//   console.log("set", nums[index]);
//   map.set(nums[index], index);
//   // 2 : 0
//   // 7 : 1
// }
// console.log(twoSum([2, 7, 11, 15], 18));
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 2.Maximum sub array

// function maxSubarr(arr) {
//   let max = arr[0];
//   let sum = 0;
//   for (let item of arr) {
//     sum += item;
//     console.log("sum", sum);
//     console.log("max", max);
//     if (sum > max) {
//       console.log("sum>max");
//       max = sum;
//     }
//     if (sum < 0) {
//       sum = 0;
//     }
//   }
//   return max;
// }

// console.log(maxSubarr([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>...

// 1. reverse string
var str = "saare jaha se acha hindustaan hmara";

// console.log(
//   str
//     .split(" ")
//     .map((a) => a.split("").reverse().join(""))
//     .join(" ")
// );
// console.log(
//   str
//     .split(" ")
//     .map((word) => word.split("").reverse().join(""))
//     .join(" ")
// );
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 2.how to check if an object is an array or not

// function chcekarr(elem) {
//   console.log(elem instanceof Array);
//   console.log(Array.isArray(elem));
// }
// chcekarr([]);
// chcekarr({});

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 3.how to empty an array in js do not reset it to a new array,
// and do not loop through to pop each value

// var arr = [1, 23, 4, 5, 6, 6, 6, 7];
// console.log(arr.length);
// // console.log(arr.splice(0, arr.length));
// arr.length = 0;
// console.log(arr.length);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>???????????????????????????????

// 4.how to check if a number is an integer withot using inInteger

// var a = 12;
// var b = 4.22;
// if(a % 1 == 0){
//   return "a is integer"
// };
// console.log(b % 1 == 0);

// >????????????????????????????????????????????????????????
// 5 duplicate
// function duplicate(arr) {
//   // arr.concat(arr.slice());
//   console.log(arr.concat(arr));
// }
// duplicate([1, 2, 3, 4, 5]);

// // >>>>>>>>>>>>>>>>>>>>>>>>>>>????????????????????????????????????????
//  to Insert an  element  in Array

// function Insert(arr, n, x, pos) {
//   var i = n - 1;
//   for (i; i >= pos; i--) {
//     arr[i + 1] = arr[i];
//   }
//   arr[pos] = x;
//   console.log(arr);
// }

// console.log(Insert([2, 4, 1, 8, 5], 5, 10, 2));

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// function Delete(arr, n, x, pos) {
//   var i = x;
//   for (i; i <= n - 1; i++) {
//     arr[i] = arr[i + 1];
//   }
//   console.log(arr);
// }

// console.log(Delete([5, 1, 4, 3, 2, 6], 6, 3, 3));

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.
// Search in sorted Arr

// function BinarySearch(arr, low, high, key) {
//   if (high < low) return -1;

//   let mid = Math.trunc((high + low) / 2);
//   if (key === arr[mid]) return mid;
//   if (key > arr[mid]) return BinarySearch(arr, mid + 1, high, key);
//   return BinarySearch(arr, low, mid - 1, key);
// }

// console.log(BinarySearch([5, 6, 7, 8, 9, 10], 0, 5, 5));

// Time Complexity: O(log(n)) Using Binary Search
// Auxiliary Space: O(log(n)) due to recursive calls,
// otherwise iterative version uses Auxiliary Space of O(1).

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.
// function BinarySearch(arr, n, key, capacity) {

//   }
// console.log(BinarySearch([5, 6, 7, 8, 9, 10],6,6));

// ?>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>/

// ?????????????????????  Valid Anagram  ???????????????????
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Palindrome>>>>>>>>>>>>>>>>>>>>>
// var isPalindrome = function(x) {
//     if(x.length == 1)return true
//     if(x.toString() === x.toString().split('').reverse().join('')){
//         return true
//     }
//     return false

// ------------------------2nd one ,more optimize
//     let str = x.toString();
//    let i  = 0;
//    let j = str.length - 1;
//    while(j > i){
//     if(str[i] !== str[j])return false
//     i++;
//     j--
//    }
//     return true
// };

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.
// var isPalindrome = function (s) {
//   let i = 0;
//   let j = s.length - 1;

//   while (j > i) {
//     let s1 = s[i].toLowerCase();
//     let s2 = s[j].toLowerCase();
//     if ((s1 >= "a" && s1 <= "z") || (s1 >= "0" && s1 <= "9")) {
//       if ((s2 >= "a" && s2 <= "z") || (s2 >= "0" && s2 <= "9")) {
//         if (s1 == s2) {
//           i++;
//           j--;
//         } else return false;
//       } else j--;
//     } else i++;
//   }
//   return true;
// };

// console.log(isPalindrome("A man, a plan, a canal: Panama"));
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// var fib = function (n) {
//   if (n == 0) return 0;
//   if (n == 1) return 1;
//   return fib(n - 1) + fib(n - 2);
// };

// console.log(fib(2));
// console.log(fib(3));
// console.log(fib(4));

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// var maxProfit = function (prices) {
//   let profit = 0;
//   for (let i = 0; i < prices.length; i++) {
//     let price = prices[i];
//     // console.log("i", i);
//     for (let j = i + 1; j < prices.length; j++) {
//       let diff = prices[j] - price;
//       //   console.log("difference", diff);
//       //   console.log("j", j);
//       if (diff > profit) {
//         profit = diff;
//         // console.log("profit", profit);
//       }
//     }
//   }
//   return profit;
// };

// // maxProfit([7, 6, 4, 3, 1]);
// console.log(maxProfit([7, 6, 4, 3, 1]));

// var maxProfit = function (prices) {
//   let profit = 0;
//   let minPrice = prices[0];
//   for (let i = 1; i < prices.length; i++) {
//     if (prices[i] < minPrice) minPrice = prices[i];

//     profit = Math.max(profit, prices[i] - minPrice);
//     console.log("profit", profit, i);
//   }
//   return profit;
// };

// // maxProfit([7, 6, 4, 3, 1]);
// console.log(maxProfit([7, 1, 5, 3, 6, 4]));

// var hIndex = function(citations) {
//     citations.sort()
//     let papers  = citations[0];
//     let h = 0
//     for(let i = 0; i < citations.length; i++){
//         if(citations[i] >= papers){h++}
//     }
//     return h

// };

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.

// function maxSubArray(nums) {
//   //   let max = nums[0];
//   //   for (let i = 0; i < nums.length; i++) {

//   //     let currentSum =
//   //   }
//   //   return max;
//   let sum = 0;
//   let maximum = nums[0];

//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];
//     if (sum > maximum) maximum = sum;
//     if (sum <= 0) sum = 0;
//   }
//   return maximum;
// }

// console.log(maxSubArray([4, -1, 2, 1]));

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Sliding Window  >

// var maxSlidingWindow = function (nums, k) {
//   //   let result = [];
//   //   for (let i = 0; i <= nums.length - k; i++) {
//   //     let newArr = nums;
//   //     let window = newArr.slice(i, i + k);
//   //     result.push(Math.max(...window));
//   //   }
//   //   return result;

//   const result = [];
//   const deque = [];
//   for (let i = 0; i < nums.length - k; i++) {
//     if (deque.length > 0 && deque[0] <= i - k) {
//       deque.shift();
//     }
//     while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
//       deque.pop();
//     }
//     deque.push(i);
//     if (i >= k - 1) {
//       result.push(nums[deque[0]]);
//     }
//   }
//   return result;
// };

// console.log(maxSlidingWindow([1, 3, -1, 7, 5, 3, 6, 7], (k = 3)));
// // deque[3,1,2]
// // result[3,3,]
// // deque[3,1,3]

// function fizzBuzz(n) {
//   if (n % 3 == 0 && n % 5 == 0) {
//     console.log("FizzBuzz");
//   } else if (n % 3 === 0 && n % 5 !== 0) {
//     console.log("Fizz");
//   } else if (n % 5 === 0 && n % 3 !== 0) {
//     console.log("Buzz");
//   } else {
//     return n;
//   }
// }

// function main() {
//   const n = parseInt(readLine().trim(), 10);

//   fizzBuzz(n);
// }

// console.log(main());

// const removeDuplicates = function (nums) {
//   let p1 = 0;
//   let p2 = 0;
//   let count = 0;

//   while (p2 < nums.length) {
//     if (nums[p2] !== nums[p2 - 1]) {
//       count = 1;
//       nums[p1] = nums[p2];
//       p1 += 1;
//     } else {
//       count += 1;
//       if (count <= 2) {
//         nums[p1] = nums[p2];
//         p1 += 1;
//       }
//     }
//     p2 += 1;
//   }
//   return p1;
// };
// console.log(removeDuplicates([1, 1, 1, 2, 2, 3]));


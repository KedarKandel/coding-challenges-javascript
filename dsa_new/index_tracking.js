/* Problem: Two Sum With Index Tracking
Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Return the answer in any order.*/

/* 
Input: nums = [2, 7, 11, 15], target = 9  
Output: [0, 1] // Because nums[0] + nums[1] = 2 + 7 = 9

Input: nums = [3, 2, 4], target = 6  
Output: [1, 2]

Input: nums = [3, 3], target = 6  
Output: [0, 1]

Constraints:
2 <= nums.length <= 10⁴
-10⁹ <= nums[i] <= 10⁹
-10⁹ <= target <= 10⁹

Only one valid answer exists
*/

function indexOfTwoNumbers(arr, target) {
  if (!Array.isArray(arr) || typeof target !== "number") {
    return "Invalid inputs, array must be an array and target must be a number";
  }

  if (arr.length < 2) {
    return arr;
  }

  const numToIndex = new Map();
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    const complement = target - num;

    if (numToIndex.has(complement)) {
      return [numToIndex.get(complement), i];
    }

    numToIndex.set(num, i);
  }
  return [];
}

const nums = [3, 2, 4];
const target = 7;
console.log(indexOfTwoNumbers(nums, target));

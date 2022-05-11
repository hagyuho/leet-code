/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    var result = [];
   for (let i = 0; i < nums.length; i++) {
       for (let j = i+1; j < nums.length; j++) {
           if(target===nums[i]+nums[j]) {
               result.push(i,j);
               break;
           }             
       }
   }
   return result;
};

var nums = [3,2,4];
var target = 6;


console.log(twoSum(nums,target))


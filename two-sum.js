// test
var twoSum = function (nums, target) {
  for (const [i, sum] of nums.entries()) {
    const newNums = [...nums];
    newNums.splice(i, 1);
    for (const [i2, sum2] of newNums.entries()) {
      if (sum + sum2 === target) {
        return [i, i2 + 1];
      }
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));

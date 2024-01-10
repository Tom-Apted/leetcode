var searchInsert = function (nums, target) {
  let counter = 0;
  while (nums[counter] < target) {
    counter++;
  }
  return counter;
};

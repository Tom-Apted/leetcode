var removeElement = function (nums, val) {
  let k = 0;
  let i = 0;
  let j = 0;
  while (j < nums.length) {
    if (nums[i] !== val) {
      i++;
      k++;
      j = i;
    } else {
      if (nums[j] !== val) {
        const temp = nums[j];
        nums[j] = nums[i];
        nums[i] = temp;
      } else {
        j++;
      }
    }
  }
  return k;
};

removeElement([3, 2, 2, 3], 3);
removeElement([3, 3], 5);
removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
removeElement([4, 5], 4);

var merge = function (nums1, m, nums2, n) {
  const len = m + n;
  nums1.splice(len - n);
  for (let i = 0; i < n; i++) {
    nums1.push(nums2[i]);
  }

  for (let j = 1; j < len; j++) {
    if (nums1[j - 1] || nums1[j - 1] === 0) {
      if (nums1[j] < nums1[j - 1]) {
        let tmp = nums1[j - 1];
        nums1[j - 1] = nums1[j];
        nums1[j] = tmp;
        j = j - 2;
      }
    }
  }
  return nums1;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(merge([1], 1, [], 0));
console.log(merge([0], 0, [1], 1));

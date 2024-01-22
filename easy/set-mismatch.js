var findErrorNums = function (nums) {
  var findErrorNums = function (nums) {
    // Ex: [1,2,2,4]
    const n = nums.length;
    const except = (n * (n + 1)) / 2; // 1 + 2 + 3 + 4

    const set = new Set(nums); // {1, 2, 4}
    let setSum = 0;
    set.forEach((val) => (setSum += val)); // 1 + 2 + 4

    const numSum = nums.reduce((curr, acc) => curr + acc); // 1 + 2 + 2 + 4

    // numSum - setSum = [1 + 2 + 2 + 4] - [1 + 2 + 4] = 2
    // except - setSum = [1 + 2 + 3 + 4] - [1 + 2 + 4] = 3

    return [numSum - setSum, except - setSum];
  };
};

console.log(findErrorNums([1, 1]));

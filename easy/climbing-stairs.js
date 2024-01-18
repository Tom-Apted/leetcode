var climbStairs = function (n) {
  let first = 1;
  let second = 2;
  if (n === 0 || n === 1) {
    return first;
  }
  for (let i = 3; i <= n; i++) {
    let third = first + second;
    first = second;
    second = third;
  }
  return second;
};

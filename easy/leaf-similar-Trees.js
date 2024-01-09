var leafSimilar = function (root1, root2) {
  const leavesRoot1 = [];
  const leavesRoot2 = [];
  const collectLeaves = function (root, leaves) {
    if (root.left === null && root.right === null) {
      leaves.push(root.val);
    }
    if (root.left !== null) {
      collectLeaves(root.left, leaves);
    }
    if (root.right !== null) {
      collectLeaves(root.right, leaves);
    }
  };
  collectLeaves(root1, leavesRoot1);
  collectLeaves(root2, leavesRoot2);
  console.log(leavesRoot1, leavesRoot2);

  if (leavesRoot1.length !== leavesRoot2.length) {
    return false;
  }

  for (let i = 0; i < leavesRoot1.length; i++) {
    if (leavesRoot1[i] !== leavesRoot2[i]) {
      return false;
    }
  }
  return true;
};

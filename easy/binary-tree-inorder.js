var inorderTraversal = function (root) {
  const output = [];

  const traversel = function (node, output) {
    if (node === null) {
      return;
    }
    if (node.left !== null) {
      traversel(node.left, output);
    }
    output.push(node.val);
    if (node.right !== null) {
      traversel(node.right, output);
    }
  };
  traversel(root, output);
  return output;
};

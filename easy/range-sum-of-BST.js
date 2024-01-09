var rangeSumBST = function (root, low, high) {
  let sum = 0;
  if (root == null) return 0;

  // Stores the nodes while
  // performing level order traversal
  let q = [];

  // Push the root node
  // into the queue
  q.push(root);

  // Iterate until queue is empty
  while (q.length != 0) {
    // Stores the front
    // node of the queue
    let curr = q.shift();

    // If the value of the node
    // lies in the given range
    if (curr.val >= low && curr.val <= high) {
      // Add it to sum
      sum += curr.val;
    }

    // If the left child is
    // not null and exceeds low
    if (curr.left != null && curr.val > low)
      // Insert into queue
      q.push(curr.left);

    // If the right child is not
    // null and exceeds low
    if (curr.right != null && curr.val < high)
      // Insert into queue
      q.push(curr.right);
  }

  // Return the resultant sum
  return sum;
};

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BinarySearchTree {
//   constructor() {
//     this.root = null;
//   }
//   insert(value) {
//     var newNode = new Node(value);
//     if (this.root === null) {
//       this.root = newNode;
//       return this;
//     }
//     let current = this.root;
//     while (current) {
//       if (value < current.value) {
//         if (current.left === null) {
//           current.left = newNode;
//           return this;
//         }
//         current = current.left;
//       } else {
//         if (current.right === null) {
//           current.right = newNode;
//           return this;
//         }
//         current = current.right;
//       }
//     }
//   }
//   searchTotal()
// }

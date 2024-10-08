namespace solution1 {
  // Definition for a binary tree node
  class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
      this.val = val === undefined ? 0 : val;
      this.left = left === undefined ? null : left;
      this.right = right === undefined ? null : right;
    }
  }

  function maxDepth(root: TreeNode | null): number {
    if (root === null) {
      return 0;
    }
    const countLeft = maxDepth(root.left) + 1;
    const countRight = maxDepth(root.right) + 1;
    return Math.max(countLeft, countRight);
  }
}

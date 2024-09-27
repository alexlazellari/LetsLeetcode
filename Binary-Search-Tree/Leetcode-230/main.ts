namespace solution1 {
  //Definition for a binary tree node.
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

  function kthSmallest(root: TreeNode | null, k: number): number {
    let count = 0;
    let kSmallest = Infinity;
    function inOrder(root: TreeNode | null) {
      if (!root) return;
      inOrder(root.left);
      if (++count === k) {
        kSmallest = root.val;
        return;
      }
      inOrder(root.right);
    }
    inOrder(root);
    return kSmallest;
  }
}

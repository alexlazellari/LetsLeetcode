namespace solution1 {
  // Definition for a binary tree node.

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

  function levelOrder(root: TreeNode | null): number[][] {
    if (!root) return [];

    const queue = [root];
    const values: number[][] = [];
    let j = 0;

    while (queue.length > 0) {
      const levelSize = queue.length;
      const cLevel: number[] = [];

      for (let i = 0; i < levelSize; i++) {
        const node = queue.shift()!;

        cLevel.push(node.val);

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }

      values.push(cLevel);
    }
    return values;
  }
}

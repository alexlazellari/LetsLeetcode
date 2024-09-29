namespace solution1 {
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

  function sortedArrayToBST(nums: number[]): TreeNode | null {
    if (nums.length === 0) return null;
    const rootNode = (start: number, end: number): TreeNode | null => {
      if (start > end) return null;

      const midPoint = Math.floor((start + end) / 2);
      const root = new TreeNode(nums[midPoint]);

      root.left = sortedArrayToBST(nums.slice(0, midPoint));
      root.right = sortedArrayToBST(nums.slice(midPoint + 1, nums.length));

      return root;
    };

    return rootNode(0, nums.length - 1);
  }
}

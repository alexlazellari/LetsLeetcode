namespace solution1 {
  // Definition for singly-linked list.
  class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }

  function sortList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head;

    const mid = splitList(head);
    const left = sortList(head);
    const right = sortList(mid);

    return mergeList(left, right);
  }

  function splitList(head: ListNode | null): ListNode | null {
    let slow = head;
    let fast = head;
    let prev: ListNode | null = null;

    // Use fast and slow pointers to find the middle
    while (fast && fast.next) {
      prev = slow;
      slow = slow.next;
      fast = fast.next.next;
    }

    // Disconnect the left half form the right half
    if (prev) prev.next = null;

    // Return the head of the right half
    return slow;
  }

  function mergeList(left: ListNode | null, right: ListNode | null) {
    let node: ListNode = new ListNode(0);
    let head = node;

    while (left && right) {
      if (left.val <= right.val) {
        node.next = left;
        node = node.next;
        left = left.next;
      } else if (left.val > right.val) {
        node.next = right;
        node = node.next;
        right = right.next;
      }
    }

    while (left) {
      node.next = left;
      node = node.next;
      left = left.next;
    }
    while (right) {
      node.next = right;
      node = node.next;
      right = right.next;
    }

    return head.next;
  }
}

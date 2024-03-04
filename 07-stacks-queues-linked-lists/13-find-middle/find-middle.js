function findMiddle(list) {
  let slow = list.head;
  let fast = list.head;
  let prev = null;

  while (fast !== null && fast.next !== null) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  if (fast === null) {
    return prev.next;
  } else {
    return slow;
  }
}

module.exports = findMiddle;

var mergeTwoLists = function (list1, list2) {
  let newList = new ListNode(0);
  let headOfNewList = newList;
  while (list1 != null && list2 != null) {
    if (list1 < list2) {
      newList.next = list1;
      l1 = l1.next;
    } else {
      newList.next = list2;
      l2 = l2.next;
    }
    newList = newList.next;
  }
  if (l1 === null) {
    newList.next = l2;
  } else {
    newList.next = l1;
  }

  return headOfNewList.next;
};

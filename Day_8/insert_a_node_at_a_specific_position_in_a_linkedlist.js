function insertNodeAtPosition(head, data, position) {
    let linkedList = new SinglyLinkedListNode(data);
    let next = head;
    var i = 0;
    while (i + 1 != position) {
        next = next.next;
        i++;
    }
    let pointer = next.next;
    next.next = linkedList;
    linkedList.next = pointer;

    return head;
}
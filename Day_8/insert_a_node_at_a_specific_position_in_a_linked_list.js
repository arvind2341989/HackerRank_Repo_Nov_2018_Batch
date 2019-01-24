function insertNodeAtPosition(head, data, position) {

    let temp = new SinglyLinkedListNode(data);
    let next = head;
    var i = 0;
    while (i + 1 != position) {
        next = next.next;
        i++;
    }
    let pointer = next.next;
    next.next = temp;
    temp.next = pointer;

    return head;
}
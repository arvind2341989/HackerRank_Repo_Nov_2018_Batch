function getNode(head, positionFromTail) {
    let curr = head;
    for (var i = 0; i < positionFromTail; i++) {
        head = head.next;
    }
    while (head.next != null) {
        head = head.next;
        curr = curr.next;
    }
    return curr.data;

}
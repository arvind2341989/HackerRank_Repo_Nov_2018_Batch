function reverse(head) {
    var tempNode = head;
    var newHead = head;
    while (tempNode != null) {
        var prevNode = tempNode.prev;
        tempNode.prev = tempNode.next;
        tempNode.next = prevNode;
        newHead = tempNode;
        tempNode = tempNode.prev;
    }
    return newHead;
}
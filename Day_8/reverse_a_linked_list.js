function reverse(head) {
    var prevNode;
    var currentNode = head;
    var nextNode;
    while (currentNode != null) {
        nextNode = currentNode.next;
        currentNode.next = prevNode;
        prevNode = currentNode;
        currentNode = nextNode;
    }
    head = prevNode;

    return head;
}
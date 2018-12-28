function deleteNode(head, position) {
    if (position == 0) return head.next;

    var nodeCount = 0;
    var tempNode = head;
    var currentNode = head;
    var prevNode = head;
    while (tempNode.next != null) {
        nodeCount++;
        if (nodeCount == position) {
            prevNode = tempNode;
            currentNode = tempNode.next;
        }
        tempNode = tempNode.next;
    }
    prevNode.next = currentNode.next;
    return head;
}
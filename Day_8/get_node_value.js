function getNode(head, positionFromTail) {
    var tempNode = head;
    var nodeCount = 0;
    var nodePos = 0;
    while (tempNode != null) {
        nodeCount++;
        tempNode = tempNode.next;
    }
    tempNode = head;
    while (tempNode != null) {
        nodePos++;
        if (nodePos == (nodeCount - positionFromTail)) return tempNode.data;
        tempNode = tempNode.next;
    }
    return 0;
}
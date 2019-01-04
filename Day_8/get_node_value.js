function getNode(head, positionFromTail) {
    var n = head;
    var ourDesiredNode = head;
    var index = 0;
    while (n.next != null) {
        n = n.next;
        if (index++ > positionFromTail - 1) {
            ourDesiredNode = ourDesiredNode.next;
        }
    }
    return ourDesiredNode.data;
}
function getNode(head, positionFromTail) {
    var nodes = 0;
    var i = head;
    while (i != null) {
        i = i.next;
        nodes++;
    }
    nodes -= positionFromTail;
    while (--nodes > 0) {
        head = head.next;
    }
    return head.data;

}
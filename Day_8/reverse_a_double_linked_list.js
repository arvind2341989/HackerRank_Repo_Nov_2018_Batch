function reverse(head) {
    var rHead = null;
    while (head) {
        var newNode = new DoublyLinkedListNode(head.data);
        if (rHead) {
            newNode.next = rHead;
            rHead = newNode;
        } else {
            rHead = new DoublyLinkedListNode(head.data);
        }
        head = head.next;
    }
    return rHead;

}
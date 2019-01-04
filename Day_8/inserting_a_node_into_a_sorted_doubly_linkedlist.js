function sortedInsert(head, data) {
    var newNode = new DoublyLinkedListNode(data);
    if (head == null) {
        return newNode;
    }
    else if (head.data >= data) {
        newNode.next = head;
        head.prev = newNode;
        return newNode;
    }
    else {
        var rest = sortedInsert(head.next, data);
        rest.prev = head;
        head.next = rest;
        return head;
    }

}
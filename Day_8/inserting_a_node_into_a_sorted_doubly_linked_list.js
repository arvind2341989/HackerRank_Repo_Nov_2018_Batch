function sortedInsert(head, data) {
    var a = new DoublyLinkedListNode(data), k = head;
    if (head == null) {
        return a;
    }
    else if (data <= head.data) {
        a.next = head;
        head.prev = a;
        return a;
    }
    else {
        var r = sortedInsert(head.next, data);
        head.next = r;
        r.prev = head;
        return head;
    }
}
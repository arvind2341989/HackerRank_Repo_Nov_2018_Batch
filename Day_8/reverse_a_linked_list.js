function reverse(head) {
    if (head == null)
        ;
    else {
        var prev = null;
        var current = head;
        var next = null;
        while (current != null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        head = prev;
        return head;
    }
}
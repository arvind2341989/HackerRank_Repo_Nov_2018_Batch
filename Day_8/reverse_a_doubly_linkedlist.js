function reverse(head) {
    if (head == null || head.next == null) {
        return head;
    }
    var node = reverse(head.next);
    head.next.next = head;
    head.next.prev = null;
    head.next.next.prev = head.next;
    head.next.next.next = null;
    head.next = null;
    head.prev = null;
    return node;
}
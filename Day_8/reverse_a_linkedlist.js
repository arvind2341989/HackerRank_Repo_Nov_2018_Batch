function reverse(head) {
    if (head == null || head.next == null) {
        return head;
    }

    var remaining = reverse(head.next);
    head.next.next = head;
    head.next = null;

    return remaining;
}
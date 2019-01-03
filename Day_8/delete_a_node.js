function deleteNode(head, position) {
    if (head == null) {
        return null;
    } else if (position == 0) {
        return head.next;
    } else {
        var n = head;
        for (let i = 0; i < position - 1; i++) {
            n = n.next;
        }
        n.next = n.next.next;
        return head;
    }

}
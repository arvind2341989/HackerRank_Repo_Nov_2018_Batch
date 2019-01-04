function deleteNode(head, position) {
    if (position == 0) {
        head = head.next;
    } else {
        var i = 0;
        let linkedList = new SinglyLinkedListNode();
        linkedList = head;
        while (i < (position - 1)) {
            linkedList = linkedList.next;
            i++;
        }
        linkedList.next = linkedList.next.next;
    }
    return head;
}
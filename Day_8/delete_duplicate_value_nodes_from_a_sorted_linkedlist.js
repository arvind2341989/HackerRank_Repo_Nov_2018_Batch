function removeDuplicates(head) {
    if (head == null) {
        return null;
    }
    else if ((head.next != null) && (head.data == head.next.data)) {

        head = removeDuplicates(head.next);
    }
    else {
        head.next = removeDuplicates(head.next);
    }
    return head;
}
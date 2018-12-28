function removeDuplicates(head) {
    if (head == null || head.next == null) return head;
    let temp = head;
    while (head.next != null) {
        if (head.data != head.next.data) {
            head = head.next;
        } else {
            head.next = head.next.next;
        }
    }
    return temp;

}
function printLinkedList(head) {
    var current = head;
    while (current != null) {
        console.log(current.data);
        current = current.next;
    }
}
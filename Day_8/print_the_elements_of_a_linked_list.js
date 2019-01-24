function printLinkedList(head) {
    let next = head.next;
    console.log(head.data);
    while (next != null) {
        console.log(next.data);
        next = next.next;
    }

}
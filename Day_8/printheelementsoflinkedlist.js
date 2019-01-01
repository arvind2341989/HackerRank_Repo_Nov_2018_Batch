function printLinkedList(head) {
    if (head === null) {
        return;
    }
    console.log(head.data);
    return printLinkedList(head.next);
}
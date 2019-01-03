function printLinkedList(head) {
    while (head != null) {
        var str = head.data;
        console.log(str);
        head = head.next;
    }
}
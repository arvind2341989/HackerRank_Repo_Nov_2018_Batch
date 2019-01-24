function deleteNode(head, position) {
    if (position == 0) {
        head = head.next;
    } else {
        var i = 0;

        let temp = new SinglyLinkedListNode();
        temp = head;
        while (i < (position - 1)) {
            temp = temp.next;
            i++;
        }
        temp.next = temp.next.next;
    }
    return head;  

}
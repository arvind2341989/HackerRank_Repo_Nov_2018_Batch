function insertNodeAtHead(head, data) {
    var newHead = new SinglyLinkedListNode(data)
    newHead.next = head;
    return newHead;
}
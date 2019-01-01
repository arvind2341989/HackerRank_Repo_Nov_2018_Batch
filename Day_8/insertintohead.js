function insertNodeAtHead(head, data) {
    var temp = new SinglyLinkedListNode(data);
    temp.next = head;
    head = temp;
    return head;      

}
function insertNodeAtHead(head, data) {

    let temp = new SinglyLinkedListNode(data);
    temp.next = head;
    temp.data = data;
    head = temp;

    return head;
}
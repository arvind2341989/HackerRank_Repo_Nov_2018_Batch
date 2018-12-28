function insertNodeAtPosition(head, data, position) {
    var tempNode;
    var nodePos;
    var node = new SinglyLinkedListNode(data);
    if (head == null) return node;
    else {
        tempNode = head;
        nodePos = 0;
    }
    if (position === 0) {
        node.next = head;
        return node;
    }

    while (tempNode != null) {
        if (nodePos === position - 1) {
            node.next = tempNode.next;
            tempNode.next = node;
        } else {
            tempNode = tempNode.next;
        }
        nodePos = nodePos + 1;
    }
    return head;
}
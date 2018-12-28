function removeDuplicates(head) {
    var currentNode = head;
    var tempNode;
    if (head == null) return null;

    while (currentNode.next != null) {
        if (currentNode.data == currentNode.next.data) {
            tempNode = currentNode.next.next;
            currentNode.next = null;
            currentNode.next = tempNode;
        } else currentNode = currentNode.next;
    }
    return head;
}
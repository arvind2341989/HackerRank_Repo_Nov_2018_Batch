function sortedInsert(head, data) {
    let curr = head,
        temp = new DoublyLinkedListNode(data);

    while (curr) {
        if (data <= curr.data) {
            let prev = curr.prev;
            temp.next = curr;
            curr.prev = temp;
            if (prev) {
                prev.next = temp;
                temp.prev = prev;
            } else {
                return temp;
            }
            return head;
        } else if (!curr.next) {
            curr.next = temp;
            temp.prev = curr;
            return head;
        }
        curr = curr.next;
    }

}
// Complete the insertNodeAtTail function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtTail(head, data) {
    let temp = new SinglyLinkedListNode(data);
    if (head === null) {
        head = temp;
        return head;
    } else {
        let next = head;
        while (next.next != null) {
            next = next.next;
        }
        next.next = temp;
        return head;
    }
}


function insertNodeAtTail(head, data) {
var tmp = new SinglyLinkedListNode(data); 
        tmp.data = data; tmp.next = null;
            if(head == null) {
                 head = tmp;
                 return head;
            } 

        var current = head;
            while(current.next != null) {
                 current = current.next;
            }
                current.next = tmp;
                return head;


}
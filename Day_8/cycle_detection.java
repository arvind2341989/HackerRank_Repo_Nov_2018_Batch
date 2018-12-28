    static boolean hasCycle(SinglyLinkedListNode head) {
        HashSet<SinglyLinkedListNode> listSet = new HashSet<SinglyLinkedListNode>();

        while(head != null){
            if(listSet.contains(head)) return true;
            
            listSet.add(head);
            head = head.next;
        }
        return false;
    }
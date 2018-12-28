    static int findMergeNode(SinglyLinkedListNode head1, SinglyLinkedListNode head2) {
        Set<SinglyLinkedListNode> nodeSet = new HashSet<>();
        
        while(head1 != null){
            nodeSet.add(head1);
            head1 = head1.next;
        }

        while(head2 != null){
            if(nodeSet.contains(head2))
                return head2.data;
            head2 = head2.next;
        }
        return 0;
    }
function findMergeNode(headA, headB) {
    var SinglyLinkedListNode1 =headA;
    var SinglyLinkedListNode2 = headB;
    
    var set1 = new set();
    while(SinglyLinkedListNode1!=null){
        set1.add(SinglyLinkedListNode1);
        SinglyLinkedListNode1=SinglyLinkedListNode1.next;            
    }
    while(SinglyLinkedListNode2!=null){
        if(set1.has(SinglyLinkedListNode2)){
            break;
        }
        SinglyLinkedListNode2=SinglyLinkedListNode2.next;
    }
    return SinglyLinkedListNode2.data;
}
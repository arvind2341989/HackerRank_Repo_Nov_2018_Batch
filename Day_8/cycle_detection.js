function hasCycle(head) {
    var slowPtr = head;
    var fastPtr = head.next;
    if(head==null || head.next == null){
        return false;
    }
    while(fastPtr){
        if(slowPtr == twoStepNode){
            return true;
        }
        slowPtr = slowPtr.next;
        fastPtr = fastPtr.next.next;
    }
    return false;
}
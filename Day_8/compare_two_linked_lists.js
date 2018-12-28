function CompareLists(llist1, llist2) {
    var tempNode1 = llist1;
    var tempNode2 = llist2;

    if (llist1 == null && llist2 == null) return true;
    else if (llist1 == null || llist2 == null) return false;
    else {
        var matchStatus = 1;
        while (tempNode1.next != null && tempNode2.next != null) {
            if (tempNode1.data != tempNode2.data) {
                matchStatus = 0;
                break;
            }
            tempNode1 = tempNode1.next;
            tempNode2 = tempNode2.next;
        }
        if (tempNode1.next != null || tempNode2.next != null) matchStatus = 0;

        if (matchStatus == 1) return true;
        else return false;
    }
}

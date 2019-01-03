function CompareLists(llist1, llist2) {
    if (llist1 == null && llist2 == null)
        return true;

    var status = true;
    while (llist1 != null && llist2 != null) {
        if (llist1.data != llist2.data) {
            status = false;
            break;
        }
        llist1 = llist1.next;
        llist2 = llist2.next;
    }
    if (llist1 != null) {
        status = false;
    }
    if (llist2 != null) {
        status = false;
    }
    return status;
}
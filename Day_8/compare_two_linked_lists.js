function CompareLists(llist1, llist2) {
    var check = 0;
    let pointer1 = llist1;
    let pointer2 = llist2;
    while (pointer1 != null && pointer2 != null) {
        if (pointer1.data == pointer2.data) {
            pointer1 = pointer1.next;
            pointer2 = pointer2.next;
        }
        else {
            check = 1;
            break;
        }
    }
    if (pointer1 != null && pointer2 != null) {
        check = 1;
    } else if (pointer1 != null || pointer2 != null) {
        check = 1;
    }
    if (check == 0) {
        return 1;
    } else {
        return 0;
    }

}
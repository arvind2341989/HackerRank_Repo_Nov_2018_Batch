function mergeLists(head1, head2) {
    if (head1 == null && head2 == null) {
        return null;
    }
    else if (head1 == null) {
        return head2;
    }
    else if (head2 == null) {
        return head1;
    }
    else {
        if (head1.data < head2.data) {
            head1.next = mergeLists(head1.next, head2);
        }
        else {
            var temp = head2;
            head2 = head2.next;
            temp.next = head1;
            head1 = temp;
            head1.next = mergeLists(head1.next, head2);
        }
    }
    return head1;

}
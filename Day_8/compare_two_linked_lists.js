function CompareLists(head1, head2) {
    if (head1 == null && head2 == null) {
        return true;
    }
    if ((head1 != null && head2 == null) || (head2 != null && head1 == null)) {
        return false;
    }
    if (head1.data != head2.data) {
        return false;
    }
    return CompareLists(head1.next, head2.next);
}
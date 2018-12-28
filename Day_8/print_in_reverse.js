function reversePrint(head) {
    let prev = null;
    let next = null;
    let current = head;

    while (current != null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    while (prev != null) {
        console.log(prev.data);
        prev = prev.next;
    }
    return;

}
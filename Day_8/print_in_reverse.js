function reversePrint(head) {
    if (head == null)
        ;
    else {
        reversePrint(head.next);
        console.log(head.data);

    }

}
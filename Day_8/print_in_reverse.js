function reversePrint(head) {
    var stack = [];
    var n = head;
    while (n.next != null) {
        stack.push(n.data);
        n = n.next;
    }
    stack.push(n.data);
    while (stack.length != 0) {
        console.log(stack.pop());
    }
}
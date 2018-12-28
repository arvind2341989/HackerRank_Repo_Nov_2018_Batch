function reversePrint(head) {
    var nodeCount = 0;
    var array = new Array(1000);

    while (head != null) {
        array[nodeCount] = head.data;
        nodeCount++;
        head = head.next;
    }

    var arrLength = array.length;

    for (let i = nodeCount - 1; i >= 0; i--){
        console.log(array[i]);
    }
}
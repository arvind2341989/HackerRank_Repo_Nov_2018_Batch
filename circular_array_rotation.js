function circularArrayRotation(a, k, queries) {
    var query=[];
    a = a.reverse();
    for (var i = 0; i < (k % (a.length)); i++) {
        a.push(a.shift());
    }
    a = a.reverse();
    for (var i = 0; i < queries.length; i++) { 
        query[i] = a[queries[i]];
    }
    return query;
}
function dynamicArray(n, queries) {
   var a = [n];
    var query, querytype,temp;
         for(var i=0;i<n;i++)
           {
               a[i]=[];
          }
         var res = [];
         var lastAnswer = 0;
         for(var i=0;i<queries.length;i++)
             {
                 var querytype1 = queries[i][0];
                 var querytype2 = queries[i][1];
                 var querytype3 = queries[i][2];               
             if(querytype1 == 1) {
                 var seq =  querytype2 ^ lastAnswer;
                 seq = seq % n;               
                 a[seq].push(querytype3);         
             }
             else {
                 var seq = querytype2 ^ lastAnswer;
                 seq = seq % n;
                 temp=a[seq];
                 lastAnswer = temp[querytype3 % temp.length];               
                 res.push(lastAnswer);
             }
         }
         return res;
}
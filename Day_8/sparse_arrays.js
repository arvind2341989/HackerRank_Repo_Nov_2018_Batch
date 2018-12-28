function matchingStrings(strings, queries) {
var res = [queries.length];
    
        for(var i=0;i<queries.length;i++){
            res[i]=0;
            for(var j=0;j<strings.length;j++){
                if(queries[i]==strings[j]){
                    res[i]=res[i]+1;
                }
            }
        }

return res;
}
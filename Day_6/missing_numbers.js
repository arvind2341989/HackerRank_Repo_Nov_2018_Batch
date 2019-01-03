// Complete the missingNumbers function below.
function missingNumbers(arr, brr) {
      var res=[];
    var duplicateMap =  new Map();
    var originalMap =  new Map();
    
    for(let i=0;i<brr.length;i++){
        if(!duplicateMap.has(arr[i]))
            duplicateMap.set(arr[i],1);
        else
            duplicateMap.set(arr[i],duplicateMap.get(arr[i])+1);
    }
    
     for(let i=0;i<brr.length;i++){
        if(!originalMap.has(brr[i]))
            originalMap.set(brr[i],1);
        else
            originalMap.set(brr[i],originalMap.get(brr[i])+1);
    }
    
    originalMap.forEach((value,key) => {
        //if duplicateMap has originalMap key
       if(duplicateMap.has(key)){
           let diff = Math.abs(duplicateMap.get(key) - originalMap.get(key));
           //if diff is non zero then push
            if(diff){
                res.push(key);
            }
        }else{
          res.push(key);
       } 
    });
return res.sort((a,b) => {return a-b});
}
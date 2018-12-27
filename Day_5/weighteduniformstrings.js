function weightedUniformStrings(s, queries) {
     let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toLowerCase()
    let str = s.split('');
    let arr = [];
    let char;
    let sum = 0;
    for(let i=0; i<str.length; i++){
        let weight = alpha.indexOf(str[i])+1
        if(str[i] === char){
            sum++
        }else{
            char = str[i];
            sum = 1
        }
        arr.push(sum*weight)
    }
    return queries.map(q => arr.indexOf(q) > -1 ? 'Yes': 'No' )

}
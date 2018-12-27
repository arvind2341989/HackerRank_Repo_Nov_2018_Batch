function funnyString(s) {

    var revString = s.split('').reverse().join('');
    console.log(revString);
    var arr1 = [];
    var arr2 = [];
    for (let i = 0; i < s.length - 1; i++) {
        arr1.push(Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1)));
    }
    for (let i = 0; i < s.length - 1; i++) {
        arr2.push(Math.abs(revString.charCodeAt(i) - revString.charCodeAt(i + 1)));
    }
    console.log(arr1);
    console.log(arr2);
    for (let i = 0; i < s.length; i++) {
        if (arr1[i] != arr2[i]) {
            return "Not Funny";
        }
    }
    return "Funny";  
}

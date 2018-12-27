// Complete the encryption function below.
function encryption(s) {
    var sLength = Math.sqrt(s.length);
    var cols = Math.ceil(sLength);
    var rows = Math.floor(sLength);

    if (rows * cols < s.length)
        (rows < cols) ? rows++ : cols++;

    var string = s.split('');
    var encStr = "";

    for (let i = 0; i < cols; i++){
        for (let j = i; j < string.length; j += cols){
            encStr += string[j];
        }
        encStr += " ";
    }
    return encStr;
}
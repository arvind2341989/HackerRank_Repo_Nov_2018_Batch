// Complete the caesarCipher function below.
function caesarCipher(s, k) {
    var output = "";
    for (let i = 0; i < s.length; i++){
        let newChar = s.charCodeAt(i);
        if (newChar >= 65 && newChar <= 90) {
            newChar = 65 + ((newChar - 65) + k) % 26;
        }
        else if (newChar >= 97 && newChar <= 122) {
            newChar = 97 + ((newChar - 97) + k) % 26;
        }
        output += String.fromCharCode(newChar);
    }
    return output;

}
// Complete the pangrams function below.
function pangrams(s) {
    var charTxt = "abcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < s.length; i++){
        charTxt = charTxt.replace(s[i].toLowerCase(), "");
    }
    if (charTxt.length === 0) return "pangram";
    else return "not pangram";

}
function palindromeIndex(s) {
    if (isPalindrome(s))
        return -1;

    for (var i = 0, j = s.length - 1; i < Math.floor(s.length / 2); i++ , j--) {
        if (s[i] !== s[j]) {

            if (isPalindrome(s.substring(i, j))) {
                return j;
            }
            else {
                return i;
            }
        }
    }

}
function isPalindrome(str) {

    for (var i = 0, j = str.length - 1; i < Math.floor(str.length / 2); i++ , j--) {
        if (str[i] !== str[j]) {
            return false;
        }
    }

    return true;
}
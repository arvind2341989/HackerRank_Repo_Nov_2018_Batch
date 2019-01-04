function highestValuePalindrome(number, n, k) {
    var count = 0;
    var i_init = Math.floor(n / 2) - 1;
    var j_init = Math.ceil(n / 2);
    for (var i = 0, j = n - 1; i <= i_init; i++ , j--) {
        if (number.charAt(i) == number.charAt(j)) {
            continue;
        }
        count++;
    }
    var result = "";
    var prefix = "", suffix = ""
    if (count > k)
        return -1;
    else {
        for (var i = 0, j = n - 1; i <= i_init; i++ , j--) {
            if (number.charAt(i) != number.charAt(j)) {
                if (count == k) {
                    if (number.charAt(i) > number.charAt(j)) {
                        prefix += number.charAt(i);
                        suffix = number.charAt(i) + suffix;
                    } else {
                        prefix += number.charAt(j);
                        suffix = number.charAt(j) + suffix;
                    }
                    count--;
                    k--;
                } else if (count < k) {
                    prefix += "9";
                    suffix = "9" + suffix;
                    count--;
                    if (number.charAt(i) == "9" || number.charAt(j) == "9") {
                        k--;
                    } else {
                        k -= 2;
                    }
                }
            } else {
                if (k - count > 1 && number.charAt(i) != "9") {
                    prefix += "9";
                    suffix = "9" + suffix;
                    k -= 2;
                } else {
                    prefix += number.charAt(i);
                    suffix = number.charAt(j) + suffix;
                }
            }
        }
        if (n % 2 == 1) {
            if (k != 0)
                prefix += "9";
            else
                prefix += number.charAt(Math.floor(n / 2));
        }
        return (prefix + suffix).trim();
    }
}
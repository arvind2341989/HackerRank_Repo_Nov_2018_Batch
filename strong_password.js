function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    var numbers = "0123456789".split('');
    var password = password.split('');
    var lower_case = "abcdefghijklmnopqrstuvwxyz";
    var upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var special_characters = "!@#$%^&*()-+";
    var u = 0, l = 0, n = 0, s = 0, u1 = 0, l1 = 0, n1 = 0, s1 = 0;
    console.log("password" + password);
    for (var i = 0; i < password.length; i++) {
        if (numbers.includes(password[i])) {
            n++;

        }
        else if (lower_case.includes(password[i])) {
            l++;

        }
        else if (upper_case.includes(password[i])) {
            u++;
        }
        else if (special_characters.includes(password[i])) {
            s++;
        }
    }
    if (password.length >= 6) {
        if (n == 0)
            n1++;
        if (l == 0)
            l1++;
        if (u == 0)
            u1++;
        if (s == 0)
            s1++;

        var sum = n1 + l1 + u1 + s1;
        return sum;

    }
    else {

        if (n == 0) {
            n1++;
            console.log("n1 value" + n1);
        }

        if (l == 0) {
            l1++;
            console.log("l1 value" + l1);
        }
        if (u == 0) {
            u1++;
            console.log("u1 value" + u1);
        }
        if (s == 0) {
            s1++;
            console.log("s1 value" + s1);
        }
        sum = n1 + l1 + u1 + s1;
        console.log(sum);

        if ((sum + password.length) >= 6)
            return sum;
        else
            return 6 - password.length;


    }
}
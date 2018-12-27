// Complete the minimumNumber function below.
function minimumNumber(n, password) {
    var toAdd = 0;
    if (password.search(/[0-9]/) == -1)++toAdd;
    if (password.search(/[a-z]/) == -1)++toAdd;
    if (password.search(/[A-Z]/) == -1)++toAdd;
    if (password.search(/[\!\@\#\$\%\^\&\*\(\)\-\+]/) == -1)++toAdd;
    if (password.length + toAdd < 6) toAdd += 6 - (password.length + toAdd);
    return toAdd; 
}
/*
 * Complete the contacts function below.
 */
function contacts(queries) {
    var contactArr = {};
    var accounts = [];
    var counter = 0;
    for (let i = 0; i < queries.length; i++){
        switch (queries[i][0]) {
            case "add":
                contactArr = addAccount(contactArr, queries[i][1]);
                break;
            case "find":
                accounts[counter] = findAccounts(contactArr, queries[i][1]);
                counter++;
                break;
        }
    }
    if (counter == 0) return [0];
    else return accounts
}
function addAccount(contactArr, accName) {
    var root = contactArr;
    accName.split("").forEach(function (char, index, arr) {
        if (!contactArr[char]) {
            contactArr[char] = { instances: 1 };
            contactArr = contactArr[char];
        } else {
            contactArr[char].instances++;
            contactArr = contactArr[char];
        }
    });
    return root;
}
function findAccounts(contactArr, accPartialName) {
    var pos;
    accPartialName.split("").every(function (char, index, arr) {
        if (contactArr[char]) {
            contactArr = contactArr[char];
            return true;
        } else contactArr = null;
    });
    if (contactArr) return contactArr.instances;
    else return 0;
}

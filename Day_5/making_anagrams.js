// Complete the makingAnagrams function below.
function makingAnagrams(s1, s2) {
    var arrS1 = [];
    var arrS2 = [];
    var count = 0;
    for (let i = 0; i < s1.length;i++){
        if (!arrS1[s1.charCodeAt(i) - 97]) arrS1[s1.charCodeAt(i) - 97] = 1;
        else arrS1[s1.charCodeAt(i) - 97] += 1;
    }
    for (let i = 0; i < s2.length; i++) {
        if (!arrS2[s2.charCodeAt(i) - 97]) arrS2[s2.charCodeAt(i) - 97] = 1;
        else arrS2[s2.charCodeAt(i) - 97] += 1;
    }
    for (let i = 0; i < 26; i++) {
        var aVal = arrS1[i] || 0;
        var bVal = arrS2[i] || 0;
        count += Math.abs(aVal - bVal);
    }
    return count;
}
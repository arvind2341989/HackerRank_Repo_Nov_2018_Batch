// Complete the beautifulPairs function below.
function beautifulPairs(A, B) {
    var count = 0;
    for (let i = 0; i < A.length; i++){
        let b = B.length;
        for (let j = 0; j < b; j++){
            if (A[i] == B[j]) {
                count++;
                B.splice(j, 1);
                break;
            }
        }
    }
    var res = count + (B.length > 0 ? 1 : -1);
    return res;
}
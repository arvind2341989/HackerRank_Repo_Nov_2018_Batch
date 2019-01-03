// Complete the minimumLoss function below.
function minimumLoss(price) {
    let yearsPrice = [];
    for (let i = 0; i < price.length; i++){
        yearsPrice[price[i]] = i;
    }

    price.sort((a, b) => { return a - b; });
    let minDiff = Number.MAX_VALUE;

    for (let i = 0; i < price.length - 1; i++){
        if (yearsPrice[price[i + 1]] < yearsPrice[price[i]]) {
            let diff = price[i + 1] - price[i];
            if (diff > 0) minDiff = Math.min(minDiff, diff);
        }
    }

    return minDiff;
}
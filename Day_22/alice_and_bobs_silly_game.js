
function isPrime(number) {
    var start = 2;
    while (start <= Math.sqrt(number)) {
        if (number % start++ < 1) return false;
    }
    return number > 1;
};

function main() {
    var g = parseInt(readLine());
    var primes = [];
    for (var j = 2; j <= 150000; j++) {
        if (isPrime(j)) {
            primes.push(j);
        }
    }
    for (var a0 = 0; a0 < g; a0++) {
        var n = parseInt(readLine());
        var res = 0;
        for (var i = 0; i <= 150000; i++) {
            if (primes[i] > n) {
                if (res % 2 === 0) {
                    console.log("Bob")
                } else {
                    console.log("Alice")
                }
                break;
            }
            res++;
        }
    }

}
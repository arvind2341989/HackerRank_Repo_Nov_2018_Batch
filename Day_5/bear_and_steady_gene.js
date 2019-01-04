
    var letters = {
        "A": 0,
        "C": 1,
        "T": 2,
        "G": 3
    };

    function countLetters(s) {
        var result = [0, 0, 0, 0];
        for (var i = 0; i < s.length; ++i) {
            var letter = s[i];
            result[letters[letter]]++;
        }
        return result;
    }

    function interval(str) {
        var currentSubstr = [0, 0, 0, 0],
            s = 0, e = 0, letter;

        return {
            equals: function (wantedSubstr) {
                for (var i = 0; i < 4; ++i) {
                    if (wantedSubstr[i] > currentSubstr[i]) return false;
                }
                return true;
            },
            moveStart: function () {
                var letter = str[s++];
                currentSubstr[letters[letter]]--;
                return letter;
            },
            moveEnd: function () {
                var letter = str[e++];
                currentSubstr[letters[letter]]++;
                return letter;
            },
            adjustEnd: function (letter) {
                while (e !== str.length) {
                    var nextLetter = str[e++];
                    currentSubstr[letters[nextLetter]]++;
                    if (nextLetter === letter) {
                        return;
                    }
                }
            },
            length: function () {
                return e - s;
            },
            end: function () {
                return e === str.length;
            }
        }
    }

        // Complete the steadyGene function below.
    function steadyGene(gene) {
        let n = gene.length;
        var wantedSubstr = countLetters(gene).map(function (nLetter) {
            if (nLetter < n / 4) return 0;
            else return nLetter - n / 4;
        });

        var minLength = wantedSubstr.reduce(function (pv, cv) { return pv + cv; }, 0);

        var substr = interval(gene);
        var e = substr.equals(wantedSubstr);
        while (!substr.equals(wantedSubstr)) {
            substr.moveEnd();
        }

        if (substr.end()) return n;

        var optimalResult = substr.length();
        while (!substr.end()) {
            if (optimalResult === minLength) {
                return minLength;
            }

            var letter = substr.moveStart();
            if (wantedSubstr[letters[letter]] !== 0) {
                if (!substr.equals(wantedSubstr))
                    substr.adjustEnd(letter);
            }
            if (substr.length() < optimalResult) {
                optimalResult = substr.length();
            }
        };

        return optimalResult;
    }
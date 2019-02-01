function passwordCracker(pass, attempt) {
    let result = [], memo = {};
    const backtrack = (subTarget) => {
        if (subTarget.length === 0) return true;
        if (memo[subTarget] !== undefined) return false;
        for (let i = 0; i < pass.length; i++) {
            const word = pass[i];
            if (subTarget.slice(0, word.length) === word) {
                result.push(word);
                memo[subTarget] = true;
                const newTarget = subTarget.slice(word.length);
                if (backtrack(newTarget)) return true;
                result.pop();
            }
        }
    }
    backtrack(attempt);
    const isValid = result.join("") === attempt;
    return isValid ? result.join(" ") : "WRONG PASSWORD";
}
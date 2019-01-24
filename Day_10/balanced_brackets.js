function isBalanced(s) {
    const closedOpenMap = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    const stack = [];
    for (const i in s) {
        const char = s[i];
        if (closedOpenMap[char] === undefined) {
            stack.push(char);
        } else if (stack.length === 0 || stack.pop() !== closedOpenMap[char]) {
            return 'NO';
        }
    }

    return stack.length === 0 ? 'YES' : 'NO';

}

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const map = { ')': '(', ']': '[', '}': '{' };

        for (const c of s) {
            if (c === '(' || c === '[' || c === '{') {
                stack.push(c);
            } else {
                if (stack.at(-1) !== map[c]) return false;
                stack.pop();
            }
        }

        return stack.length === 0;
    }
}

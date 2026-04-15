class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const a = s.toLowerCase().split("").filter(c => {
            return ((c >= "a" && c <= "z") || (c >= "0" && c <= "9"))
        });

        const str = a.join('');

        return str === str.split('').reverse().join('');
    }
}

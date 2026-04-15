class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const clean = s.toLowerCase().split('').filter(c => 
            (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9')
        ).join('');

        let l = 0, r = clean.length - 1;
        while (l < r) {
            if (clean[l] !== clean[r]) return false;
            l++;
            r--;
        }
        return true;
    }
}

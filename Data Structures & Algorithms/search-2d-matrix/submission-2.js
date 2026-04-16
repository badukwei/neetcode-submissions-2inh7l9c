class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const rows = matrix.length;
        const cols = matrix[0].length;

        let l = 0;
        let r = rows * cols - 1;

        while (l <= r) {
            const mid = Math.floor((l + r) / 2);
            const val = matrix[Math.floor(mid / cols)][mid % cols];
            if (val === target) return true;
            else if (val < target) l = mid + 1;
            else if (val > target) r = mid - 1;
        }

        return false;
    }
}

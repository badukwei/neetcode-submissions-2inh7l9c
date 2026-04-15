class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0, r = 1;
        let max = 0;

        while (r < prices.length) {
            const profit = prices[r] - prices[l];
            
            if (profit > max) max = profit;
            if (profit < 0) l = r;
            
            r++;
        }

        return max;
    }
}

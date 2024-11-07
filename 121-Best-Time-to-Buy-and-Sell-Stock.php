class Solution {

    /**
     * @param Integer[] $prices
     * @return Integer
     */
function maxProfit($prices) {
    $min_price = PHP_INT_MAX;
    $max_profit = 0;

    foreach ($prices as $price) {
        if ($price < $min_price) {
            $min_price = $price;
        }
        $profit = $price - $min_price;
        if ($profit > $max_profit) {
            $max_profit = $profit;
        }
    }

    return $max_profit;
}
}
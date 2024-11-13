class Solution {

    /**
     * @param Integer $num
     * @return Integer
     */
    function addDigits($num) {
        if ($num == 0) {
            return 0;
        }
        
        $sum = 0;
        
        // Loop through the digits of the number
        while ($num > 0) {
            $sum += $num % 10;  // Add the last digit to sum
            $num = (int)($num / 10);  // Remove the last digit
        }

        // If the sum is a single digit, return it
        if ($sum < 10) {
            return $sum;
        }

        // Otherwise, recursively call addDigits with the new sum
        return $this->addDigits($sum);
    }
}

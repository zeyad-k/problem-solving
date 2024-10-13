class Solution {

    /**
     * @param Integer $x
     * @return Integer
     */
    function mySqrt($x) {
        if ($x == 0 || $x == 1) {
            return $x;
        }

        $left = 1;
        $right = $x;

        while ($left <= $right) {
            $mid = $left + intval(($right - $left) / 2);
            $square = $mid * $mid;

            if ($square == $x) {
                return $mid;
            } elseif ($square < $x) {
                $left = $mid + 1;
            } else {
                $right = $mid - 1;
            }
        }

        return $right; // $right will be the largest integer whose square is <= $x
    }
}

class Solution {

    /**
     * @param String $date1
     * @param String $date2
     * @return Integer
     */
    function daysBetweenDates($date1, $date2) {
        $diff=date_diff(date_create($date1), date_create($date2));

        return $diff->format("%a");

        
    }
}
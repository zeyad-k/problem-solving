class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer[]
     */
    function twoSum($nums, $target) {
        $length = count($nums);  // Get the length of the array
        for ($i = 0; $i < $length; $i++) {  // Loop through the array
            $rest = $target - $nums[$i];  // Calculate the complement of the current element
            for ($j = $i + 1; $j < $length; $j++) {  // Loop through the array starting from the next element
                if ($rest == $nums[$j]) {  // Check if the complement exists in the array
                    return [$i, $j];  // Return the indices
                }
            }
        }
        return [];  // Return an empty array if no solution is found
    }
}

class Solution {

    /**
     * @param String[] $word1
     * @param String[] $word2
     * @return Boolean
     */
    function arrayStringsAreEqual($word1, $word2) {
        // Join the elements of each array to form strings
    $str1 = implode('', $word1);
    $str2 = implode('', $word2);
    
    // Compare the resulting strings
    return $str1 === $str2;
        
    }
}
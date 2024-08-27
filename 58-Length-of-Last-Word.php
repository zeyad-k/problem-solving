class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function lengthOfLastWord($s) {
        $array=explode(" ",$s);

        for($i=count($array)-1;$i>=0;$i--)
        {
            $lastWord=$array[$i];
            if($lastWord!=='')
            {
                 return strlen($lastWord);
            }
        }
    }
}
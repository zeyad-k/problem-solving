class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
   function getConcatenation($nums) {
        // return array_merge($nums, $nums);
         return [...$nums, ...$nums];
        // $ans=[];
        // $length=count($nums);
        // for ($i=0;$i<$length;$i++)
        // {
        //     $ans[$i]=$nums[$i];
        //     $ans[$i+$length]=$nums[$i];
        // }
        // return $ans;
    }
}
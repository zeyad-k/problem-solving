class Solution {

    /**
     * @param Integer $x
     * @return Integer
     */
    function mySqrt($x) {
        if($x==0 || $x==1)
        {
            return $x;
        }
        $result=1;
        $i=1;
        while($result <= $x){
            $i++;
            $result=$i*$i;
        }
        return $i-1;
        
    }
}
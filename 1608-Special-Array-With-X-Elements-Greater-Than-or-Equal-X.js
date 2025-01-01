/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
    /*  Idea:
  x = ele's nums that are greater or equal to it
  exists a number x such that there are exactly x numbers in nums
  [3,5]
      x = 0 --
      x = 1 --
      x = 2 ++
  [0,0]
    x = 0
    eles = 2
    x = -1
  
  
       
  Edge Cases: 
  [0]
  x => 0
  ele => 1 -- => return -1
  
          
  [3]
  x => 1
  ele => 1 ++  => return 1
  
  
      
  [7, 9 , 35, 12, 45, 65, 110, 123 , 648, 756, 234]
  x range 1, nums.length - 1 (On)
  itterate over the array to compare (On)
  
      sort  =>  half length
          x = 0 --
          x = 1
          x = 6 = > 7, 9, 35, 12, 45, 65
  
  
       
  Approach
  to loop over the array 
  to nest a loop to loop with x's val
  count the eles that are >= x
  if count == x return count
  not, consider another x
  
          length => 10
          x = 5 >>
          x = 7 <<
          x = 6
          O1 => 7 steps
  
       */


    for (let i = 0; i <= nums.length; i++) {
        let counter = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] >= i) {
                counter++;
            }
        }
        if (i == counter) {
            return counter;
        }
    }
    return -1;




};
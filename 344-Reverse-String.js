/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    len=s.length

    for(i=0;i<len/2;i++){
        temp=s[i];
        s[i]=s[len-i-1];
        s[len-i-1]=temp;

    }
};
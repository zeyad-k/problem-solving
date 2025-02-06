/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea = 0;
    let left = 0, right = height.length - 1;
    
    function calcArea(height, left, right) {
        const width = right - left;
        return Math.min(height[right], height[left]) * width;
    }

    while (left < right) {
        maxArea = Math.max(maxArea, calcArea(height, left, right));

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;  // Decrement right instead of incrementing
        }
    }

    return maxArea;
};

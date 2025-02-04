/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  // Temporary array to hold the merged result.
  const merged = [];
  
  // Two pointers: one for nums1 and one for nums2.
  let p1 = 0;
  let p2 = 0;
  
  // Merge the two arrays until one is exhausted.
  while (p1 < m && p2 < n) {
    if (nums1[p1] < nums2[p2]) {
      merged.push(nums1[p1]);
      p1++;
    } else {
      merged.push(nums2[p2]);
      p2++;
    }
  }
  
  // If there are remaining elements in nums1, add them.
  while (p1 < m) {
    merged.push(nums1[p1]);
    p1++;
  }
  
  // If there are remaining elements in nums2, add them.
  while (p2 < n) {
    merged.push(nums2[p2]);
    p2++;
  }
  
  // Copy the merged array back into nums1.
  for (let i = 0; i < merged.length; i++) {
    nums1[i] = merged[i];
  }
};
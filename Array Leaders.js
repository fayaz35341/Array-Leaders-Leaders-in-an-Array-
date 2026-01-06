// User function Template for javascript

/**
 * @param {number[]} a
 * @returns {number[]}
 */
class Solution {
    // Function to find the leaders in the array.
    leaders(arr) {
        // code here
        let r= []
        let max_a= -Infinity
        for (let i= arr.length-1; i>=0; i--){
            if (max_a <= arr[i]){
                r.push(arr[i])
                max_a=arr[i]
            }
        }
        r.reverse()
        return r
    }
}

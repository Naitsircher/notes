console.log('WELCOME TO%c algo.js! ', 'background: #222; color: #3399FF');
/**
 * Given an array, write a function that returns a new array where each negative value 
 * converted to a positive value.
 * 
 * For example, bePositive([-1,-3,-5]) returns [1, 3, 5]. A positive number in the original array
 * should remain as positive, so that each number in the new array is all positive.
 */

//===========================================================
// MAKE POSITIVE ALL THE NEGATIVE NUMBERS INSIDE THE ARRAY
//===========================================================
function bePositive(arr) {
    for(let i=0; i<arr.length; i++){
        if(arr[i] < 0)
        // this will multiply the negative 
        // number into -1;
        arr[i] *= -1;
    }
    return arr;
};
/**Given an array with multiple values, write a function that returns the maximum number in the array.
 * 
 * For example, findMax([-3,3,5,7]) should return 7. */
//===========================================================
// FIND THE MAXIMUM NUMBER INSIDE THE ARRAY
//===========================================================
function findMax() {
    let max = arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i] > max)
        max = arr[i];
    }
    return max;
};
/**
 * Test Cases (6/6)
 * findMax([-3,3,5,7]) to return 7
 * findMax([-3,3,15,7]) to return 15
 * findMax([13,3,5,7]) to return 13
 * findMax([0,-3,-5,-7]) to return 0
 * findMax([3]) to return 3
 * findMax([-1,-3,-5,-7]) to return -1
*/

/**Given an array with multiple values, write a function that returns a new array with two elements.
 * The first value in the new array should be the minimum value in the original array. The second 
 * value in the new array should be the maximum value in the original array.
 * 
 * For example, findMinMax([1,3,5]) should return [1, 5]. Similarly, findMinMax([-1,-3,10]) should return [-3, 10].*/
//===========================================================
// FIND THE MINIMUM AND MAXIMUM
//===========================================================
function finMinMax() {
    let max=arr[0];
    let min=arr[0];
    let newArr=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max)max=arr[i];
        if(arr[i]<min)min=arr[i];
    }
    newArr.push(min, max);
    return newArr;
};
/**
 * Test Cases (4/4)
 * findMinMax([1,3,5]) to return [1,5]
 * findMinMax([-1,3,5]) to return [-1,5]
 * findMinMax([-1,-3,-5]) to return [-5,-1]
 * findMinMax([-1, -3, 10]) to return [-3,10]
*/
/**
 * Given array of numbers, create function to replace last value with number of positive values.
 * 
 * Example, countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.
 */

//===========================================================
// REPLACE LAST TO POSITIVES COUNT 
//===========================================================
function countPositives(params) {
    let count = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>0)count++;
    }
    arr[arr.length-1]=count;
    return arr;
};
/** Test Cases
 * countPositives([-1,1,1,1]) to return [-1,1,1,3]
 * countPositives([-1,-5,-5,10]) to return [-1,-5,-5,1]
 * countPositives([1,2,3,2]) to return [1,2,3,4]
 */

/**
 * Given an array, write a function that prints values that are greater than its 2nd value in the array.
 * For example, given [1,3,5,7,9,13], it should print/log 5, 7, 9, and 13. Assume that the array has at
 *  least 2 values. Have the function also return the sum of the numbers that were printed/logged.
 */
//===========================================================
// LOG GREATER THAN 2N AND RETURN THE SUM OF GREATER THAN 
// 2ND
//===========================================================
function valGreaterThanSecond(arr) {
    let sum=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] > arr[1]){
            console.log(arr[i]);
            sum+=arr[i];
        }
    }
    return sum;
}
/**Test Cases:
 * valGreaterThanSecond([1,3,5,7,9,13]) to log 5 7 9 13
 * valGreaterThanSecond([1,3,5,7,9,13]) to return 34
 * valGreaterThanSecond([1,3,-5,7,-9,13]) to log 7 13
 * valGreaterThanSecond([1,5,3,7,0,19]) to log 7 19
 * valGreaterThanSecond([1,5,3,7,0,19]) to return 26
 */
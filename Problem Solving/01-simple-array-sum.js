/*
 * Complete the 'simpleArraySum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY array as parameter.
 * 
 * Given an array of integers, find the sum of its elements.
 * For example, if the array [1,2,3] so returns 6.
 */

function simpleArraySum(ar) {
    // Write your code here
    return ar.reduce((a, b) => a + b);
}
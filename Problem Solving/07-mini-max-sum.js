/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    let sortArr1 = arr.sort((a, b) => a - b);
    let copyArr = [...sortArr1];
    sortArr1.shift();
    copyArr.splice(-1);
    let maxSum = sortArr1.reduce((a, b) => a + b);
    let minSum = copyArr.reduce((a, b) => a + b);
    console.log(minSum + ' ' + maxSum);
}
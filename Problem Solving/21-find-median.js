/*
 * Complete the 'findMedian' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */
function findMedian(arr) {
    arr.sort((a, b) => a - b)
    return arr.length % 2 === 0 ? arr[(arr.length / 2) - 1] :
        arr[Math.floor(arr.length / 2)];
}
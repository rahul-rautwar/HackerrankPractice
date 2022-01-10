/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function compareTriplets(a, b) {
    // Write your code here
    let aCount = 0,
        bCount = 0;
    for (let i = 0; i < a.length; i++) {
        for (let j = i; j <= i; j++) {
            if (a[i] > b[j]) {
                aCount++;
            }
            if (a[i] < b[j]) {
                bCount++;
            }
        }
    }
    return [aCount, bCount]
}
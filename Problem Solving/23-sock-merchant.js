/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */
function sockMerchant(n, ar) {
    ar.sort((a, b) => a - b)
    let pairCount = 0;
    for (let i = 0; i < n - 1; i++) {
        if (ar[i] === ar[i + 1]) {
            pairCount++;
            i += 1
        }
    }
    return pairCount;
}
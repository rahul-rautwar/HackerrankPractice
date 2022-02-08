/*
 * Complete the 'hurdleRace' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY height
 */
function hurdleRace(k, height) {
    height.sort((a, b) => a - b);
    if (k > height[height.length - 1]) {
        return parseInt(0);
    } else {
        return parseInt(height[height.length - 1] - k);
    }
}
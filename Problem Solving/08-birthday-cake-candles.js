/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */
function birthdayCakeCandles(candles) {
    // Write your code here
    let maxCount = 0;
    let maxNumer = Math.max(...candles);
    for (let i = 0; i < candles.length; i++) {
        if (candles[i] == maxNumer) {
            maxCount++;
        }
    }
    return maxCount;
}
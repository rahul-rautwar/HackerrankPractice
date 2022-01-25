/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */
function breakingRecords(scores) {
    let maxCount = 0;
    let maxValue = 0;
    let minCount = 0;
    let minValue = 0;
    for (let i = 0; i < scores.length; i++) {
        if (i === 0) {
            maxValue = minValue = scores[i]
        }
        if (scores[i] > maxValue) {
            maxCount++;
            maxValue = scores[i];
        }
        if (scores[i] < minValue) {
            minCount++;
            minValue = scores[i];
        }
    }
    return [maxCount, minCount]
}
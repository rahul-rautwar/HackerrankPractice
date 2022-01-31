/*
 * Complete the 'introTutorial' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER V
 *  2. INTEGER_ARRAY arr
 */
function introTutorial(V, arr) {
    let numIndex;
    arr.forEach((num, i) => {
        if (num === V) {
            numIndex = i;
        }
    })
    return numIndex;
}
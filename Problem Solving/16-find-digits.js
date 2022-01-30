/*
 * Complete the 'findDigits' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */
function findDigits(n) {
    n = n.toString();
    let arr = n.split('');
    let numCount = 0
    arr.map((num, i) => {
        if (n % num === 0) {
            numCount++
        }
    })
    return numCount;
}
/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    let posCount = 0,
        negCount = 0,
        zeroCount = 0;
    arr.map((item) => {
        if (item > 0) {
            posCount++;
        } else if (item < 0) {
            negCount++;
        } else {
            zeroCount++;
        }
    })
    let len = arr.length;
    console.log(posCount / len);
    console.log(negCount / len);
    console.log(zeroCount / len);
}
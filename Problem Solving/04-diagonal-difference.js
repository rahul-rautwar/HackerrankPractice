/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    // Write your code here
    let primaryDiagonal = 0,
        secondaryDiagonal = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i == j) {
                primaryDiagonal = primaryDiagonal + arr[i][j];
                break;
            }
        }
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if ((i + j) == arr.length - 1) {
                secondaryDiagonal = secondaryDiagonal + arr[i][j];
            }
        }
    }

    return primaryDiagonal > secondaryDiagonal ? primaryDiagonal - secondaryDiagonal : secondaryDiagonal - primaryDiagonal;
}
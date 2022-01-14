/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
    // Write your code here
    let str = ''
    for (let i = 1; i <= n; i++) {
        for (let j = n; j > 0; j--) {
            if (j > i) {
                str += ' '
            } else {
                str += '#'
            }
        }
        console.log(str)
        str = ''
    }
}
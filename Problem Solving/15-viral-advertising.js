/*
 * Complete the 'viralAdvertising' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */
function viralAdvertising(n) {
    let likes = 0;
    let ppl = 5;
    for (let i = 1; i <= n; i++) {
        let likePpl = Math.floor(ppl / 2);
        likes += likePpl;
        ppl = likePpl * 3;
    }
    return likes
}
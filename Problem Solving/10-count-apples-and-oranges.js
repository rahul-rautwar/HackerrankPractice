/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    apples = apples.map((item) => a + item);
    oranges = oranges.map((item) => b + item);
    let appleCounts = apples.filter(it => it <= t && it >= s)
    let orgCounts = oranges.filter(it => it <= t && it >= s)
    console.log(appleCounts.length);
    console.log(orgCounts.length);
}
/*
 * Complete the 'alternatingCharacters' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */
function alternatingCharacters(s) {
    let delCount = 0;
    for (let i = 0; i < s.length; i++) {
        if (s.charCodeAt(i) === s.charCodeAt(i + 1)) {
            delCount++
        }
    }
    return delCount;
}
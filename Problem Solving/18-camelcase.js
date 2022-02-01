/*
 * Complete the 'camelcase' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */
function camelcase(s) {
    let capsCharCount = 0;
    for (let i = 0; i < s.length; i++) {
        if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) {
            capsCharCount++;
        }
    }
    return capsCharCount + 1
}
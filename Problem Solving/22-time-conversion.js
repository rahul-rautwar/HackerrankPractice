/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */
function timeConversion(s) {
    let amPmStr = s.slice(8, 10);
    let timeString = s.slice(0, 8);
    let tempArr = timeString.split(':');
    let hr;
    if (amPmStr.toLowerCase() == 'pm') {
        if (tempArr[0] < 12) {
            tempArr[0] = parseInt(tempArr[0]) + 12;
        }
        if (tempArr[0] == 24) {
            tempArr[0] = '00';
        }
    }
    if (amPmStr.toLowerCase() == 'am') {
        if (tempArr[0] >= 12) {
            tempArr[0] = 12 - parseInt(tempArr[0]);
        }
        if (tempArr[0] == 0) {
            tempArr[0] = '00';
        }
    }
    return tempArr.join(':');
}
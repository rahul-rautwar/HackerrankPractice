/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */
function gradingStudents(grades) {
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] < 38) {
            continue;
        } else if (((Math.ceil((grades[i] / 5)) * 5) - grades[i]) < 3) {
            grades[i] = Math.ceil(grades[i] / 5) * 5;
        }
    }
    return grades;
}
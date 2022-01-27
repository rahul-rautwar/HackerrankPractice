/*
 * Complete the 'bonAppetit' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY bill
 *  2. INTEGER k
 *  3. INTEGER b
 */
function bonAppetit(bill, k, b) {
    bill.splice(k, 1);
    let totalSharedBill = bill.reduce((a, b) => a + b)
    let indShare = totalSharedBill / 2;
    b > indShare ? console.log(b - indShare) : console.log('Bon Appetit');
}
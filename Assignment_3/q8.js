
function repeatedSumOfDigits(num) {
    while (num >= 10) {
        num = num.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    }
    return num;
}

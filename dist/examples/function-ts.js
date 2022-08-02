"use strict";
function sumOfNumericValues(number1, number2, callback) {
    var result = number1 + number2;
    return callback(result);
}
function squaredNumber(numero) {
    return numero * numero;
}
// console.log(sumOfNumbers(1,3,squaredNumber));

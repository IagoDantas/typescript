"use strict";
var button = document.getElementById('button');
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var sumOfNumbers = function (number1, number2, shouldPrint, phrase) {
    var result = number1 + number2;
    if (shouldPrint)
        console.log(phrase + result);
    return number1 + number2;
};
var shouldPrint = true;
var phrase = "O valor é: ";
if (button) {
    button.addEventListener('click', function () {
        if (input1 && input2)
            console.log(sumOfNumbers(Number(input1.value), Number(input2.value), shouldPrint, phrase));
    });
}

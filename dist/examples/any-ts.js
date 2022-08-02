"use strict";
var anyValue;
anyValue = 3;
anyValue = "Hello";
anyValue = true;
var stringValue = 'teste';
stringValue = anyValue;
var stringValue2 = 'teste';
stringValue2 = anyValue;
function sumOfString(string1, string2) {
    return string1 + string2;
}
sumOfString(stringValue, stringValue2);

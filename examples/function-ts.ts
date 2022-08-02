function sumOfNumericValues (number1:number,number2:number, callback:(numero:number) => number):number{
    let result = number1 + number2;
    return callback(result);
}

function squaredNumber (numero:number):number{
    return numero * numero;
}

// console.log(sumOfNumbers(1,3,squaredNumber));
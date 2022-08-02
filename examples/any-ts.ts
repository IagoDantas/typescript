let anyValue:any;

anyValue = 3;
anyValue = "Hello";
anyValue = true;

let stringValue: string = 'teste';
stringValue = anyValue
let stringValue2: string = 'teste';
stringValue2 = anyValue;
function sumOfString(string1: string, string2: string){
    return string1 + string2;
}
sumOfString(stringValue, stringValue2);
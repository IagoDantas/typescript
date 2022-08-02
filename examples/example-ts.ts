const button = document.getElementById('button')
const input1 = document.getElementById('input1') as HTMLInputElement;
const input2 = document.getElementById('input2') as HTMLInputElement;

const sumOfNumbers = (number1: number,number2:number,shouldPrint:boolean,phrase:string) =>{
    let result = number1 + number2;
    if(shouldPrint)
    console.log(phrase+result);
    return number1 + number2;
}

let shouldPrint = true;
let phrase = "O valor é: "


if(button){
    button.addEventListener('click',()=>{
        if(input1 && input2)
        console.log(sumOfNumbers(Number(input1.value),Number(input2.value),shouldPrint,phrase));
    }) 
}
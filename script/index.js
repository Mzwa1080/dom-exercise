let numb1 = document.getElementById('num1')
let numb2 = document.getElementById('num2')

let displayVal = document.getElementById('display')

function sum(){
    const sumOfTwoNumbers = +numb1.value + +numb2.value;

    console.log(displayVal.display = sumOfTwoNumbers)

    displayVal.innerHTML = sumOfTwoNumbers;
}



sum();

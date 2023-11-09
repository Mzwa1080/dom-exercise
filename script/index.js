const btnAdd = document.querySelector('[data-submit');
const labelOutput = document.querySelector('#output');

function addition(){
    let number1 = document.getElementById('num1').value;
    let number2 = document.getElementById('num2').value;
    let sum = +number1 + +number2;
    labelOutput.textContent = sum
}

btnAdd.addEventListener('click', addition)
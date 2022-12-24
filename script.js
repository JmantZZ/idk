function add() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var result = Number(num1) + Number(num2);
    document.getElementById('result').textContent = `${num1} + ${num2} is equal to ${result}`
}

function subtract() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var result = Number(num1) - Number(num2);
    document.getElementById('result').textContent = `${num1} - ${num2} is equal to ${result}`
}

function divide() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var result = Number(num1) / Number(num2);
    document.getElementById('result').textContent = `${num1} / ${num2} is equal to ${result}`
}

function multiply() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var result = Number(num1) * Number(num2);
    document.getElementById('result').textContent = `${num1} * ${num2} is equal to ${result}`
}
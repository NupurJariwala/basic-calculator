function valuebutton(e) {
    calculatorform.screen.value += e.value;
}

function calculate() {
    calculatorform.screen.value = eval(calculatorform.screen.value);
}

function Clear() {
    calculatorform.screen.value = null;
}


const display = document.getElementById('display');

function appendValue(val) {
    display.value += val;
    
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
    display.value = eval(display.value);
    } catch {
    display.value = 'Error';
    }
}
function keypress(){
    if(event.key === 'Enter'){
        calculate();
    }
}
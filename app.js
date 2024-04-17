//Section1: 
const resultText = document.getElementsByClassName("result-Text")[0];

//Section2: 
function onNumberPressed(number) {
    if (number === ".") {
        if (resultText.innerHTML.length === 0 && resultText.innerHTML.includes("."))
            return;
    }
    resultText.innerHTML += number.toString();
}
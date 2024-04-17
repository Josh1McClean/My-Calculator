//Section1: Selects the HTML element with the class "result-text" and assigns it to the constant variable resultText.
const resultText = document.getElementsByClassName("result-text")[0];

//Section2: Initializes two variables, storedValue and operator, to null
let storedValue = null;
let operator = null;

//Section3: Contains the onNumberPressed function, which is responsible for handling number button presses.
function onNumberPressed(number) {

    /*Part2: Checks if the pressed number is a decimal point and if it's already present in the result text. 
    If either condition is met, it prevents appending another decimal point to avoid an invalid input.*/
    if (number === ".") {
        if (resultText.innerHTML.length === 0 || resultText.innerHTML.includes("."))
            return;
    }

    /*Part2: Appends the pressed number (converted to a string) to the result text displayed on the calculator. 
    It executes if the pressed number is not a decimal point or if the conditions in the preceding if statement are not met.*/
    resultText.innerHTML += number.toString();
}

/*Section4: This section contains the canOperate function, which checks if there are characters in the result text. Returns true if there is at least one character, indicating that an operation can be 
performed, otherwise returns false.*/
function canOperate() {
    return resultText.innerHTML.length >= 1;
}

//Section5: Contains the operate function, responsible for performing arithmetic operations.
function operate(number) {
    /*Part1: Declares a variable 'result' to store the result of the operation.*/
    let result;

    /*Part2: Uses a switch statement to perform the appropriate operation based on the 'operator' variable*/
    switch (operator) {
        case "+":
            result = storedValue + number;
            break;

        case "-":
            result = storedValue - number;
            break;

        case "X":
            result = storedValue * number;
            break;

        case "/":
            result = storedValue / number;
            break;
    }

    /*Part3: Updates the result text with the calculated result, resets 'storedValue' and 'operator' variables to null*/
    resultText.innerHTML = result;
    storedValue = null;
    operator = null;
}

//Section6: Contains the onOperationPressed function, responsible for handling operation button clicks
function onOperationPressed(operation) {
    /*Part1: Parses the current result text into a number and assigns it to the 'number' variable*/
    const number = parseFloat(resultText.innerHTML);

    /*Part2: Checks if an operation can be performed by verifying if there is at least one character in the result text*/
    if (!canOperate()) return;

    /*Part3: Determines the action based on the provided operation:
        //If '=' is pressed and 'storedValue' is not null, it calls the operate function
        // If 'C' (clear) is pressed, it resets 'storedValue' and 'operator' to null
        // For other operations, it assigns the operation to the 'operator' variable and stores the current number as 'storedValue'*/
    if (operation === "=" && storedValue !== null) {
        return operate(number);
    } else if (operation === "C") {
        storedValue = null;
        operator = null;
    } else {
        operator = operation;
        storedValue = number;
    }

    /*Part4: Resets the result text to an empty string*/
    resultText.innerHTML = "";
}
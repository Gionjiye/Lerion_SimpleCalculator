function calculate(operation) {
    const firstNumber = document.getElementById("number1").value;
    const secondNumber = document.getElementById("number2").value;

    if (firstNumber === "" || secondNumber === "") {
        document.getElementById("result").textContent =
            "Please enter two numbers.";
        return;
    }

    // Convert text values into numbers
    const number1 = Number(firstNumber);
    const number2 = Number(secondNumber);
    let answer;

    // Addition
    if (operation === "add") {
        answer = number1 + number2;

    }

    // Subtraction
    else if (operation === "subtract") {
        answer = number1 - number2;

    }

    // Multiplication
    else if (operation === "multiply") {
        answer = number1 * number2;

    }

    // Division
    else if (operation === "divide") {

        // Prevent division by zero
        if (number2 === 0) {
            document.getElementById("result").textContent =
                "Cannot divide by zero.";
            return;
        }
        answer = number1 / number2;

    }

    // Modulo
    else if (operation === "modulo") {
        // Prevent modulo by zero
        if (number2 === 0) {
            document.getElementById("result").textContent =
                "Cannot use modulo with zero.";
            return;
        }
        answer = number1 % number2;

    }

    // Percentage
    else if (operation === "percentage") {

        answer = (number1 / 100) * number2;

    }

    // Display the answer
    document.getElementById("result").textContent =
        "Result: " + answer;
}

// Clear calculator
function clearCalculator() {

    // Clear first number
    document.getElementById("number1").value = "";
    // Clear second number
    document.getElementById("number2").value = "";
    // Reset result
    document.getElementById("result").textContent =
        "Result: 0";
}
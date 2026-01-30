let previous = document.getElementById("previous");
let display = document.getElementById("display");
let operators = ["+", "-", "*", "/", "%"];

function append(value) {
    let lastChar = display.value.slice(-1);
// Replace last operator with new one
   if (operators.includes(value) && operators.includes(lastChar)) {
    display.value = display.value.slice(0, -1) + value;
    return;
}

    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

document.addEventListener("keydown", function (event) {
    const key = event.key;

    // Numbers (0–9)
    if (!isNaN(key)) {
        append(key);
        return;
    }

    // Decimal
    if (key === ".") {
        append(".");
        return;
    }

    // Operators
    if (key === "+" || key === "-" || key === "*" || key === "/") {
        append(key);
        return;
    }

    // Enter / Equals
    if (key === "Enter" || key === "=") {
        event.preventDefault(); // prevent form submit
        calculate();
        return;
    }

    // Backspace
    if (key === "Backspace") {
        deleteLast();
        return;
    }

    // Clear
    if (key === "Escape") {
        clearDisplay();
        return;
    }
});

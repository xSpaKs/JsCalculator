let form = document.querySelector("form");
let input1 = document.getElementById("number1");
let input2 = document.getElementById("number2");
let operation = document.getElementById("operation");
let results = document.getElementById("results");
let error = document.getElementById("error");
let reset = document.getElementById("reset");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let value1 = input1.value;
    let value2 = input2.value;
    let value3 = operation.value;

    if (value1 != "" && value2 != "" && value3 != "") {
        if (!isNaN(value1) && !isNaN(value2)) {
            value1 = Number(value1);
            value2 = Number(value2);

            if (value3 == "+") {
                const result = value1 + value2;
                results.innerHTML = result;
            } else if (value3 == "-") {
                const result = value1 - value2;
                results.innerHTML = result;
            } else if (value3 == "*") {
                const result = value1 * value2;
                results.innerHTML = result;
            } else if (value3 == "/") {
                const result = value1 / value2;
                results.innerHTML = result;
            } else {
                error.innerHTML = "Please select a valid operation type";
            }
        } else {
            error.innerHTML = "Your inputs are not numbers";
        }
    } else {
        error.innerHTML = "Please select all of your inputs";
    }
});

reset.addEventListener("click", (e) => {
    error.innerHTML = "";
    results.innerHTML = "";
});

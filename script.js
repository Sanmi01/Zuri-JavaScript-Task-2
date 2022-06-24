let firstNum = prompt("Enter the first number:")


while ( (isNaN(firstNum)) ||  (firstNum == "") ||  (firstNum == null) ) {
    firstNum = prompt("Invalid input. Please enter a valid input (number) for the first number:")
}

let secondNum = prompt("Enter the second number:")

while ( (isNaN(secondNum)) ||  (secondNum == "") ||  (secondNum == null) ) {
    secondNum = prompt("Invalid input. Please enter a valid input (number) for the second number:")
}

let operation = prompt("Enter operator from the list below: +, -, *, /, %")
let answer = ""

while (operation !== "+" && operation !== "-" && operation !== "*" && operation !== "/" && operation !== "%") {
    operation = prompt("Invalid input. Please enter operator from the list below: +, -, *, /, %")
}

function calculation() {
    if (operation === "+") {
        answer = firstNum + secondNum
        alert(answer)
    } else if (operation === "-") {
        answer = firstNum - secondNum
        alert(answer)
    } else if (operation === "*") {
        answer = firstNum * secondNum
        alert(answer)
    } else if (operation === "/") {
        answer = firstNum / secondNum
        alert(answer)
    } else if (operation === "%") {
        answer = firstNum % secondNum
        alert(answer)
    } 
}

calculation()
function calculation() {
    let firstNum = parseFloat(prompt("Enter the first number:"))
    while ( (isNaN(firstNum)) ||  (firstNum === "") ||  (firstNum === null) ) {
        firstNum = parseFloat(prompt("Invalid input. Please enter a valid input (number) for the first number:"))
    }
    
    let secondNum = parseFloat(prompt("Enter the second number:"))
    while ( (isNaN(secondNum)) ||  (secondNum === "") ||  (secondNum === null) ) {
        secondNum = parseFloat(prompt("Invalid input. Please enter a valid input (number) for the second number:"))
    }
    
    let operation = prompt("Enter operator from the list below: +, -, *, /, %")
    let answer = ""
    while (operation !== "+" && operation !== "-" && operation !== "*" && operation !== "/" && operation !== "%") {
        operation = prompt("Invalid input. Please enter operator from the list below: +, -, *, /, %")
    }

    if (operation === "+") {
        answer = firstNum + secondNum
        alert(`Result: ${firstNum} ${operation} ${secondNum} = ${answer}`)
    } else if (operation === "-") {
        answer = firstNum - secondNum
        alert(`Result: ${firstNum} ${operation} ${secondNum} = ${answer}`)
    } else if (operation === "*") {
        answer = firstNum * secondNum
        alert(`Result: ${firstNum} ${operation} ${secondNum} = ${answer}`)
    } else if (operation === "/") {
        answer = firstNum / secondNum
        alert(`Result: ${firstNum} ${operation} ${secondNum} = ${answer}`)
    } else if (operation === "%") {
        answer = firstNum % secondNum
        alert(`Result: ${firstNum} ${operation} ${secondNum} = ${answer}`)
    } 
}

let button = document.querySelector('button');
button.addEventListener('click', () => {
    calculation();
});

calculation();
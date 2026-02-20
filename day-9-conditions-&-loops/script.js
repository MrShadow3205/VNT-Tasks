let studentName = "Swayam";
const age = 21;
console.log("Student Name:", studentName);
console.log("Age:", age);

function checkNumber() {
    let number = Number(prompt("Enter a number:"));

    if (number > 0) {
        console.log("Positive Number");
    } else if (number < 0) {
        console.log("Negative Number");
    } else {
        console.log("Zero");
    }
}

function calculateGrade() {
    let marks = Number(prompt("Enter your marks:"));

    if (marks >= 90) {
        console.log("Grade: A");
    } else if (marks >= 75) {
        console.log("Grade: B");
    } else if (marks >= 60) {
        console.log("Grade: C");
    } else {
        console.log("Grade: Fail");
    }
}

function printNumbers() {
    console.log("Numbers from 1 to 20:");
    for (let i = 1; i <= 20; i++) {
        console.log(i);
    }
}

function multiplicationTable() {
    let num = Number(prompt("Enter number for table:"));
    console.log("Table of " + num);

    for (let i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + (num * i));
    }
}

function countdown() {
    let i = 10;
    while (i >= 1) {
        console.log(i);
        i--;
    }
}

function guessingGame() {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    let guess = Number(prompt("Guess a number (1-10):"));

    if (guess === randomNumber) {
        console.log("Correct Guess!");
    } else if (guess > randomNumber) {
        console.log("Too High! Correct number was: " + randomNumber);
    } else {
        console.log("Too Low! Correct number was: " + randomNumber);
    }
}

checkNumber();
calculateGrade();
printNumbers();
multiplicationTable();
countdown();
guessingGame();
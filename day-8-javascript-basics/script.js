let studentName = "Swayam";

const age = 20;

let course = "JavaScript Basics";
let marks = 95;
let isPassed = true;

console.log("Student Name:", studentName);
console.log("Age:", age);
console.log("Course:", course);
console.log("Marks:", marks);
console.log("Passed:", isPassed);

function checkEvenOdd(number) {
  if (number % 2 === 0) {
    console.log(number + " is Even");
  } else {
    console.log(number + " is Odd");
  }
}

checkEvenOdd(10);
checkEvenOdd(7);

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero";
  }
  return a / b;
}

console.log("Addition:", add(10, 5));
console.log("Subtraction:", subtract(10, 5));
console.log("Multiplication:", multiply(10, 5));
console.log("Division:", divide(10, 5));

function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

console.log("30°C in Fahrenheit:", celsiusToFahrenheit(30));
console.log("86°F in Celsius:", fahrenheitToCelsius(86));

let userNumber = prompt("Enter a number to check Even or Odd:");

userNumber = Number(userNumber);

if (!isNaN(userNumber)) {
  if (userNumber % 2 === 0) {
    alert(userNumber + " is Even");
  } else {
    alert(userNumber + " is Odd");
  }
} else {
  alert("Please enter a valid number");
}

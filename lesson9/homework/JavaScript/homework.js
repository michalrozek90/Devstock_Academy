// PART 1 //
// a)
const firstName = "Karol";
// b)
const age = 40;
// c)
const isOpen = true;
// d)
const stringBoolean = "true";
// e)
const stringNumber = "100";

// PART 2 //
// a)
console.log("Michał");
// b)
console.log("Hello Ania");
// c)
console.log("4");
// d)
console.log(false);

// PART 3 //
// a)
console.log(firstName);
// b)
console.log(age);
// c)
console.log(isOpen);
// d)
console.log(stringBoolean);
// e)
console.log(stringNumber);

// PART 4 //
// a)
console.log(2 + 2);
// b)
console.log("Michał " + "Kowalski");
// c)
console.log(2 + 2 * 2);

// PART 5 //
let number1 = 4;
let number2 = 6;
let add = number1 + number2;
console.log("'wynik'," + add);

// PART 6 //
let unstableValue = 666;
unstableValue = false;
unstableValue = "Let There Be Light!";
console.log(unstableValue);

// PART 7 //
// a)
function add2() {
  return 4;
}
// b)
function helloWorld() {
  return "Hello World";
}
// c)
function booleanTrue() {
  return true;
}
// d)
function modulo() {
  return 6 % 4;
}
// e)
function power() {
  return 3 ** 4;
}
// f)
function howAreYou() {
  return "Hello," + " how are you?";
}
// g)
function multiple1() {
  return 5 * 60;
}
// h)
function multiple2() {
  return 3 * 3600;
}
// i)
function calculations() {
  return (10 * 9) / 2;
}
// j)
function minus() {
  return 200 - 10;
}

// PART 8 //
// a)
const numbers = [1, 2, 3];
// b)
const carBrands = ["Lancia", "SAAB", "Cadillac", "Vauxhall", "Maserati"];
// c)
const booleans = [true, false, true];
// d)
const empty = [];
// e)
const mix = ["Lancia", 88, true, "Vauxhall", , false];
// f)
console.log(mix[1]);
// g)
myBoard = ["Diablo 2", 666, true];
console.log(myBoard.length);
// h)
let board = [];
board.push("New Element");
console.log(board);

// PART 9 //
// a)
const emptyObject = {};
// b)
const person = {
  name: "Iza",
};
// c)
const personDetails = {
  name: "Michał",
  lastName: "Rożek",
  age: 30,
  drivingLicence: true,
};
// d)
console.log(personDetails.age);
// e)
console.log(personDetails);

// PART 10 //
// a)
function sum(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
// b)
function lastLetter(z) {
  return "z";
}
// c)
function booleanFalse(wrongAnswer) {
  return false;
}
// d)
function modulo2(firstNumber, secondNumber) {
  return firstNumber % secondNumber;
}
// e)
function power2(firstNumber, secondNumber) {
  return firstNumber ** secondNumber;
}
// f)
function twoStrings(firstString, secondString) {
  return firstString + secondString;
}
// g)
function minutesToSeconds(minutes) {
  return minutes * 60;
}
// h)
function hoursToSeconds(hours) {
  return hours * 3600;
}
// i)
function triangleArea(sideOne, sideTwo) {
  return sideOne * sideTwo * 0.5;
}
// j)
function yearsToDays(years) {
  return years * 365;
}
// k)
function power3(firstNumber) {
  return firstNumber ** firstNumber;
}
// l)
function longerSide(side1, side2) {
  return side1 + side2 - 1;
}
// m)
function sayHello(name) {
  return "Cześć, " + name;
}
// n)
function personAge(birthDate) {
  return 2021 - birthDate;
}
// o)
function score(twoPointThrow, threePointThrow) {
  return twoPointThrow * 2 + threePointThrow * 3;
}

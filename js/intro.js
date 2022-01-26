const age = prompt(
  "Введите Ваш возраст"
);

function isWorkingAgePerson(age) {
  if (age < 19) {
    return false;
  }
  if (age < 66) {
    return true;
  }
  if (age > 65) {
    return false;
  }
}

let result = isWorkingAgePerson(age);
console.log(result);

/****************************** */

const num = prompt(
  "Введите Ваш возраст"
);

function isPrimeNumber(num) {
  if (num < 0) num = -num;
  if (num < 4) return true;
  if (num % 2 == 0 || num % 3 == 0)
    return false;
  for (
    let i = 5, N = Math.sqrt(num);
    i <= N;
    i += 2
  )
    if (num % i == 0) return false;
  return true;
}
let outcome = isPrimeNumber(num);
console.log(outcome);

/**************************************** */

const Value2 = prompt("Введите число");
const Value3 = prompt("Введите число");

function Division() {
  if (Value2 % Value3 == 0) {
    return true;
  } else {
    return false;
  }
}
let answer = Division();
console.log(answer);

/************************** */

const Value4 = prompt("Введите число");
const Value5 = prompt("Введите число");
const Value6 = prompt("Введите число");

function Triangle() {
  if (Value4 + Value5 > Value6);
  else return false;

  if (Value6 + Value5 > Value4);
  else return false;

  if (Value4 + Value6 > Value5)
    return true;
  else return false;
}
let solution = Triangle();
console.log(solution);

/******************************** */

let a = Number(prompt("Введите число"));
let b = Number(prompt("Введите число"));
let c = Number(prompt("Введите число"));
Strinagle();

function Strinagle() {
  if (a + b > c) {
  } else
    alert("Треугольник невозможен");

  if (a + c > b) {
  } else
    alert("Треугольник невозможен");

  if (b + c > a) {
  } else
    alert("Треугольник невозможен");
  let p = (a + b + c) / 2;
  let S = Number(
    Math.sqrt(
      p * (p - a) * (p - b) * (p - c)
    )
  );
  console.log(S, typeof S);

  alert(S);
}

/************************** */

let d = Number(prompt("Введите число"));
let e = Number(prompt("Введите число"));

Srectangle();

function Srectangle() {
  let square = a * b;
  alert(square);
}

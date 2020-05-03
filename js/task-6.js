"use strict";

let input;

const numbers = [];

let total = 0;

while (input !== null) {
  input = prompt("Введите число!");
  numbers.push(Number(input));
  console.log(`${numbers}`);
}

if (numbers.length > 0) {
  for (const number of numbers) {
    total += number;
  }
}

console.log(`Общая сумма чисел равна ${total}.`);

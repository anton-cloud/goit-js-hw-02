"use strict";

const findLongestWord = function (string) {
  let words = string.split(" ");
  let maximum = 0;
  let longestWord;

  for (const word of words) {
    let velue = word.length;
    if (velue > maximum) {
      maximum = velue;
      longestWord = word;
    }
  }

  return longestWord;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'

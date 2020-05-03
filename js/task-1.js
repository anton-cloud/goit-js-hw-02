"use strict";

const logItems = function (array) {
  let position = 0;
  for (const item of array) {
    position += 1;
    console.log(`${position} - ${item}`);
  }
};

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

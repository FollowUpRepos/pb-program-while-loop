/**
 * Task 2
 * 
 */

let pin = "123";

while (pin.length < 6) {
  // Choose a number between 1 and 9 (inclusive) = no zeroes
  const random = Math.floor(Math.random() * 9) + 1
  pin += random
}

console.log("pin:", pin);

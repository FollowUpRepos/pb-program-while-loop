/**
 * Task 3
 */

let pin = "";

// Create an array of unused numbers...
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// ... and count them
let unused = numbers.length

for ( let ii = 0; ii < 4; ii += 1 ) {
  // Choose a random _index_ to a number
  const index = Math.floor(Math.random() * unused)

  // Remove the number from the array...
  const number = numbers.splice(index, 1)[0]
  // ... and update the number of items left in the array
  unused -= 1

  // The + with a string adds a number as if it were a character
  pin += number
}

console.log("pin:", pin);

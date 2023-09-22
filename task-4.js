/**
 * Task 4
 */

let pin = "";
let characters = "abcdefghijklmnopqrstuvwxyz!+?*";

// Ask the CPU to calculate how many characters there are only once
let chars = characters.length

while (pin.length < 6) {
  // Choose a random index in the current characters string
  const index = Math.floor(Math.random() * chars)
  // Extract the character...
  const char = characters[index]
  // ... and remove it from the list of unused characters
  characters = characters.replace(char, "")
  // Update the number of unused characters
  chars -= 1

  // Add this new (unique) character to the PIN
  pin += char
}

console.log("pin:", pin);

/** TASK
 * 
 * Write a script which will ask the user "Are you sure?"
 * 
 * If the user answers "yes" or "no", stop the script and
 * log "Thanks for your sincerity." in the console.
 * 
 * If the user answers anything else but "yes" or "no",
 * ask them to "Try again".
 */


const readLineSync = require("readline-sync")

const question = "Are you sure? > "
const prompt = "Try again. Please answer \"yes\" or \"no\". > "
const reward = "Thank you for your sincerity."

let input = readLineSync.question(question)
input = input.toLowerCase()

while (input !== "yes" && input !== "no") {
  input = readLineSync.question(prompt)
  input = input.toLowerCase()
}

console.log(reward)

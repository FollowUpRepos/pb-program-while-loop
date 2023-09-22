/**
 * Task 1 
 * 
 * Given an array with a certain number of strings, use a while loop
 * to remove the last item from the list until there are only 3 items left.
 * 
 * - Each time an item is removed, print a message to specify which item was removed
 * - print a message with the list of the remaining items
 * 
 * Does the program still work if the original list has less than 3 items?
 */

const items = ["pen", "chair", "cup", "laptop", "glass", "book"];

while (items.length > 3) {
  items.pop()
}

console.log("items:", items);


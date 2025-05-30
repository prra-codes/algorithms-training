// Fri, 30th May 2025

// 16. Sort array by string length

// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]
// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]
// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

function sortByLength(array) {
  // Return an array containing the same strings,
  // ordered from shortest to longest

  const strLengths = [];

  for (let i = 0; i < array.length; i++) {
    strLengths.push(array[i].length);
  }
  strLengths.sort((a, b) => a - b);

  const orderArr = [];

  for (let i = 0; i < strLengths.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (strLengths[i] === array[j].length) {
        orderArr.push(array[j]);
      }
    }
  }
  return orderArr;
}

console.log(sortByLength(['Telescopes', 'Glasses', 'Eyes', 'Monocles']));

// I learnt that this problem can be solved in one line after I solved it, by doing:
//  array.sort((a,b) => a.length - b.length);

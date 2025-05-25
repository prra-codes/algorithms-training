// Sun, 25th May 2025

// 3. Remove First and Last Character

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

function removeChar(str) {
  const strToArr = str.split('');
  strToArr.shift();
  strToArr.pop();
  const backToStr = strToArr.join('');

  return backToStr;
}

console.log(removeChar('super'));

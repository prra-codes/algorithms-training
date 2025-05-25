// Sun, 25th May 2025

// 4. Reversed Strings

// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str) {
  const strArr = str.split('');

  const reversedArr = [];

  for (let i = strArr.length - 1; i >= 0; i--) {
    reversedArr.push(strArr[i]);
  }

  const reversedStr = reversedArr.join('');
  return reversedStr;
}

console.log(solution('world'));

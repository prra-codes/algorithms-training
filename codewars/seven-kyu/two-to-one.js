// Thu, 29th May 2025

// 15. Two to One

// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
  // your code

  const s1Arr = s1.split('');
  const s2Arr = s2.split('');
  const mergedArr = [...s1, ...s2];

  const set = new Set(mergedArr);

  const distinctArr = Array.from(set);

  const sortedArr = distinctArr.sort();

  const sortedStr = sortedArr.join('');

  return sortedStr;
}

console.log(longest('xyaabbbccccdefww', 'xxxxyyyyabklmopq'));

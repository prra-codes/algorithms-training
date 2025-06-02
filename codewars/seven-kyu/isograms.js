// Mon, 2nd June 2025

// 24. Isograms

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str) {
  const lowerCaseStr = str.toLowerCase();

  const set = new Set();

  for (let i = 0; i < lowerCaseStr.length; i++) {
    if (set.has(lowerCaseStr[i])) {
      return false;
    } else {
      set.add(lowerCaseStr[i]);
    }
  }

  return true;
}

console.log(isIsogram('Dermatoglyphics'));
console.log(isIsogram('aba'));
console.log(isIsogram('moOse'));

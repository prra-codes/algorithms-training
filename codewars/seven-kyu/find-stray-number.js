// Tue, 3rd June 2025

// 26. Remove the minimum

// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
  let countOne = 0;
  let countTwo = 0;
  let firstVal = numbers[0];
  let secondVal = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (firstVal === numbers[i]) {
      countOne++;
    } else {
      countTwo++;
      secondVal = numbers[i];
    }
  }

  if (countOne === 1) {
    return firstVal;
  } else {
    return secondVal;
  }
}

console.log(stray([1, 1, 2]));

console.log(stray([17, 17, 3, 17, 17, 17, 17]));

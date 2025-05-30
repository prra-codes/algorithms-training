// Wed, 28th May 2025

// 13. Beginner Series #3 Sum of Numbers

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

function getSum(a, b) {
  let smallerNum = Math.min(a, b);
  let biggerNum = Math.max(a, b);

  console.log(smallerNum, biggerNum);
  let total = 0;

  for (let i = smallerNum; i <= biggerNum; i++) {
    total += i;

    console.log(i, total);
  }

  return total;
}

console.log(getSum(5, -1));

// Wed, 28th May 2025

// 12. Shortest Word

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {
  let strArr = s.split(' ');
  let shortestWord = strArr[0];
  console.log(strArr);

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length < shortestWord.length) {
      shortestWord = strArr[i];
    }
  }

  return shortestWord.length;
}

console.log(
  findShort(
    'MadeSafeCoin Dash Dogecoin Steem Monero Ethereum MadeSafeCoin Classic'
  )
);

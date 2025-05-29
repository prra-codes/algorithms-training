// Thu, 29/5/25 Learning about Sets

// Core Info from this video: https://www.youtube.com/watch?v=nGOnfYNo8F4&list=PLMNl6KNsxG8zM_hudyjDhiJ_875iT_riF&index=5

// With a set you can't store duplicate values

const mySet = new Set();

// Add value. Can add different data types to a set like strings and objects

mySet.add(60);
mySet.add(21);
mySet.add(56);
mySet.add({
  name: 'Dom',
  age: 24,
});
mySet.add('dcode');
mySet.add(67.98);

// How to check how many elements are in the set (i.e. Find size of set)

// console.log('How big is mySet? ' + mySet.size);

// How to check if a set has a particular value inside it? (i.e. Check for value)

// console.log('Does the set contain the number 25? ' + mySet.has(25));

// Delete item

mySet.delete('dcode');

// Can loop through set using a for of loop

// for (let item of mySet) {
//   console.log(item);
// }

// Convert set into array

const myArray = Array.from(mySet);

// console.log(myArray);
// console.log(mySet);

// -----------------------------------------

// Video about Sets from Codevolution
// https://www.youtube.com/watch?v=vfPd6_H7W4Q&list=PLMNl6KNsxG8zM_hudyjDhiJ_875iT_riF&index=6

// Set

// A set is a data structure that can hold a collection of values. The values however must be unique

// Set can contain a mix of different data types. You can store strings, booleans, numbers or even objects all in the same set

// Sets are dynamically sized. You don't have to declare the size of a set before creating it.

// Sets do not maintain an insertion order

// Sets are iterables. They can be used with a for of loop

// Set vs Array

// Arrays can contain duplicate values whereas Sets cannot

// Insertion order is maintained in arrays but it is not the case with sets

// Searching and deleting an element in the set is faster compared to arrays

const set = new Set([1, 2, 3]); // the set constructor optionally accepts an array as it's argument

// Add new value

set.add(4);
set.add(4);

// Check if set has value. Returns true if it exists, false otherwise

console.log(set.has(4));
set.delete(3); // Deletes value from set
console.log(set.size); // Checks number of items in set

set.clear(); // The clear method deletes all the values in a set

for (const item of set) {
  console.log(item);
}

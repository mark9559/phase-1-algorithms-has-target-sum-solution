function hasTargetSum(array, target) {
  // Write your algorithm here
  const seenNumbers = new Set(); // initialize an empty Set
  for (const number of array) {
    const complement = target - number;

    // .has returns true if the Set includes the complement
    if (seenNumbers.has(complement)) return true;

    // .add adds the number to the Set
    seenNumbers.add(number);
  }
  return false;
  
}

/* 
  Write the Big O time complexity of your function here
  
  Time complexity: O(n)
  Space complexity: O(n)




*/

/* 
  Add your pseudocode here

  iterate over the array of numbers
  for the current number, identify a complementary number that adds to our target
  (for example: if the number is 4, and the target is 10, the complementary number is 6)
  iterate over the remaining numbers in the array
    check if any of the remaining numbers is the complement
      if so, return true
if we reach the end of the array, return false

*/

/*
  Add written explanation of your solution here

  The function takes in two parametters, an array and a target.
  WE use a for loop to first iterate over the array of numbers.
  The for loop then checks for the current number and identifies
  a complementary number that adds up to the target.
  We then iterate over the remaining numbers of the array.
  We use a for loop again to check if any of the remaining numbers is the compliment.
  Returns true if so, otherwise it returns false.


*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("");
  // Negative numbers?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");
  // Multiple pairs?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");
  // Single numbers?
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));
}

module.exports = hasTargetSum;

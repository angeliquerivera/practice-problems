/**
 * `SOLVED`
 * TIMER (UPDATE ONLY ON PAUSE/COMPLETION)
 * REMEMBER TO SPLIT AFTER EVERY SECTION
 * TIME LIMIT: 30 MINS
 *
 * READ:          00:28
 * NOTES:         00:38
 * APPROACH:      04:01
 * CODE:          03:33
 * TEST:          16:15
 * OPTIMIZE:      01:00
 */

/**
* {@link https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript 7kyu - sumTwoSmallestNumbers}
*Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.


*/

/**
 * NOTES
 * get two lowest nums in arr
 * return sum of those two nums
 */

/**
 * APPROACH
 * Sort array so two lowest numbers are first
 * Filter out two lowest numbers
 * Add two lowest numbers with reduce
 * return sum
 */

/**
 * CODE BELOW
 */
// function sumTwoSmallestNumbers(numbers) {
//   numbers
//     .sort((a, b) => a - b)
//     .slice(0, 2)
//     .reduce((prevValue, currValue) => prevValue + currValue, 0);
// }

/**
 * TIME COMPLEXITY
 * O(n) + O(1) + O(1) => O(n + 2)
 * where n is the length of the ORIGINAL array,
 * and m is the length of the shortened array
 */

// Simplier solution
function sumTwoSmallestNumbers(numbers) {
  numbers.sort((a, b) => a - b);
  return numbers[0] + numbers[1];
}

/**
 * TIME COMPLEXITY
 * O(n) + O(1) => O(n + 1),
 * where n is the length of the array
 */

/**
 * My old AF answer
 * DONT USE
 */
// function sumTwoSmallestNumbers(numbers) {
//   let numOne = numbers[0];
//   let numTwo = numbers[1];

//   for (let i = 2; i < numbers.length; i++) {
//     let currNum = numbers[i];

//     if (currNum < numOne) {
//       numOne = currNum;
//       continue;
//     }
//     if (currNum < numTwo) {
//       numTwo = currNum;
//       continue;
//     }
//   }
//   return numOne + numTwo;
// }

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]), 13);
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]), 6);
console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]), 10);
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]), 24);
console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]), 16);

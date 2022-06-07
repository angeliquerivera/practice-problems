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
function sumTwoSmallestNumbers(numbers) {
  numbers
    .sort((a, b) => a - b)
    .slice(0, 2)
    .reduce((prevValue, currValue) => prevValue + currValue, 0);
}

//Simplier solution
function sumTwoSmallestNumbers(numbers) {
  numbers.sort(function (a, b) {
    return a - b;
  });
  return numbers[0] + numbers[1];
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]));
console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]));
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]));
console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]));

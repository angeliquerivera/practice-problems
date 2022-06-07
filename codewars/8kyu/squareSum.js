/**
 * `SOLVED`
 * TIMER (UPDATE ONLY ON PAUSE/COMPLETION)
 * REMEMBER TO SPLIT AFTER EVERY SECTION
 * TIME LIMIT: 30 MINS
 *
 * READ:          00:19
 * NOTES:         00:49
 * APPROACH:      02:17
 * CODE:          05:30
 * TEST:          14:00
 * OPTIMIZE:      03:00
 */

/**
* {@link https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript 8kyu - squareSum}
*Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

*/

/**
 * NOTES
 *  Numbers array given
 *  each num in arr is squared
 *  Add all squared nums together for final result
 */

/**
 * APPROACH
 * map out numbers arr to multiply each num by 2
 * collect all mapped nums using variable
 * add all nums together for result using reduce
 * return squaredNumsSum
 */

/**
 * CODE BELOW
 */
function squareSum(numbers) {
  let initialValue = 0;
  const squaredNumsSum = numbers
    .map((n) => n * n)
    .reduce((prevValue, currValue) => prevValue + currValue, initialValue);
  return squaredNumsSum;
}

// No map needed
// Do the squaring on `currVal`
function squareSum(numbers) {
  return numbers.reduce((prevVal, currVal) => prevVal + currVal ** 2, 0);
}

console.log(squareSum([1, 2]));
console.log(squareSum([0, 3, 4, 5]));
console.log(squareSum([]));

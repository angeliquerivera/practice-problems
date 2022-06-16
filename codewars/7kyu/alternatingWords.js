/**
 * `SOLVED: Reviewed 06-Jun-2022`
 * TIMER (UPDATE ONLY ON PAUSE/COMPLETION)
 * REMEMBER TO SPLIT AFTER EVERY SECTION
 * TIME LIMIT: 30 MINS
 *
 * READ:          00:18
 * NOTES:         01:09
 * APPROACH:      04:32
 * CODE:          03:51
 * FIRST TEST:    05:00
 * 2ND APPROACH:  03:21
 * 2ND TEST:      05:00 ----stopped at 22 mins, could not solve
 * OPTIMIZE:      00:00
 */

/**
* {@link https://www.codewars.com/kata/62a611067274990047f431a8/train/javascript 7kyu - alternatingWords}
* Given a number n and two values firstValue and secondValue, build an array of size n filled with firstValue and secondValue alternating.
for input:                5, true, false
expected result would be: [true, false, true, false, true]


*/

/**
 * NOTES
 *  Params are a number n, firstValue, and secondValue
 * Build array of n length
 * firstValue and secondValue must alternate
 */

/**
 * APPROACH
 * Create an Array of size n filled with empty elements
 * 
 * use .fill method on alternateWordsArray with firstValue 
 * use .splice method for secondValue

/**
 * CODE BELOW
 */
function alternate(n, firstValue, secondValue) {
  const array = Array(n);

  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      array[i] = firstValue;
    } else {
      array[i] = secondValue;
    }
  }
  return array;
}

console.log(alternate(5, true, false));

console.log(alternate(20, "blue", "red"));
console.log(alternate(0, "lemons", "apples"));

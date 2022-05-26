/**
 * TIMER (UPDATE ONLY ON PAUSE/COMPLETION)
 * REMEMBER TO SPLIT AFTER EVERY SECTION
 * TIME LIMIT: 30 MINS
 *
 * READ:          00:00
 * NOTES:         00:00
 * - STOP TIMER IF STUCK BEFORE THIS POINT -
 * APPROACH:      00:00
 * CODE:          00:00
 * TEST:          00:00
 * OPTIMIZE:      00:00
 */

/**
 * SOLVED
 * {@link https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e/train/javascript 8kyu - Sum of differences in array}
 *
 * Your task is to sum the differences between consecutive pairs in the array in descending order.
 * Example
 * [2, 1, 10]  -->  9
 *
 * In descending order: [10, 2, 1]
 *
 * Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9
 *
 * If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell).
 */

/**
 * R - Read; make sure you understand the problem
 * E - Examples using additional, non provided inputs
 * A - Approach the problem by planning your steps in simple English
 * C - Code your approach
 * T - Test your code (and attempt your code if it passes initial tests)
 * O - Optimize; time & space complexity
 */

/**
 * APPROACH
 * Capture `total` value in variable as we iterate over array
 * Sort array from greatest to least
 * LOOP FROM ARRAY START; STOP ONE BEFORE FINAL ELEMENT
 *    Grab current num and nextNum
 *    Store result of SUBTRACTION of two focused nums
 *    Add this result value to `total`
 * END LOOP
 * return `total`
 */

const arr = [1, 2, 3, 4];
const sorted = [4, 3, 2, 1];

function sumOfDifferences(arr) {
  let total = 0;

  arr.sort((a, b) => b - a);

  for (let i = 0; i < arr.length - 1; i++) {
    const currNum = arr[i];
    const nextNum = arr[i + 1];
    const subtractResult = currNum - nextNum;
    total += subtractResult;
  }
  return total;
}

const result1 = sumOfDifferences([1, 2, 10]);
const result2 = sumOfDifferences([-3, -2, -1]);

console.log(result1, result1 === 9);
console.log(result2, result2 === 2);

/**
 * TIMER (UPDATE ONLY ON PAUSE/COMPLETION)
 * REMEMBER TO SPLIT AFTER EVERY SECTION
 * TIME LIMIT: 30 MINS
 *
 * READ:          00:00
 * NOTES:         00:00
 * - STOP TIMER IF STUCK BEFORE THIS POINT -
 * APPROACH:      00:00
 * CODE:          00:00
 * TEST:          00:00
 * OPTIMIZE:      00:00
 */

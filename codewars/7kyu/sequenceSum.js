/**
 * `SOLVED- REVIEWED 15-Jun-2022`
 * TIMER (UPDATE ONLY ON PAUSE/COMPLETION)
 * REMEMBER TO SPLIT AFTER EVERY SECTION
 * TIME LIMIT: 30 MINS
 *
 * READ:          00:42
 * NOTES:         01:00
 * APPROACH:      02:00
 * CODE:          03:24
 * TEST:          00:00
 * OPTIMIZE:      00:00
 */

/**
* {@link https://www.codewars.com/kata/586f6741c66d18c22800010a/train/javascript 7kyu - sequenceSum}
* Your task is to make function, which returns the sum of a sequence of integers.

The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

If begin value is greater than the end, function should returns 0

Examples

2,2,2 --> 2
2,6,2 --> 12 (2 + 4 + 6)
1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
1,5,3  --> 5 (1 + 4)
*/

/**
 * NOTES
 * `begin`: starting value
 * `end`: ending value
 * `step`: number we add to begin until we get to end
 * returning sum of all steps
 */

// (begin, end, step) => (1, 11, 2)
// 1 + 3 + 5 + 7 + 9 + 11 = 36

/**
 * APPROACH
 * IF begin is greater than end
 *    return 0
 *
 * declare variable to store sum
 * WHILE begin is less than or equal to end
 *     add current begin value to total
 *     add step value to begin
 * END WHILE
 * return sum
 */

/**
 * CODE BELOW
 */

const sequenceSum = (begin, end, step) => {
  if (begin > end) {
    return 0;
  }
  let sum = 0;
  while (begin <= end) {
    sum += begin; // begin = begin + sum
    begin += step;
  }
  return sum;
};

const sequenceSumForLoop = (begin, end, step) => {
  let sum = 0;
  for (let currStep = begin; currStep <= end; currStep += step) {
    sum += currStep;
  }
  return sum;
};

const sequenceSumRecursive = (begin, end, step) => {
  if (begin > end) return 0;
  return begin + sequenceSumRecursive(begin + step, end, step);
};

console.log(sequenceSum(2, 6, 2));
console.log(sequenceSum(1, 5, 1));
console.log(sequenceSum(1, 5, 3));

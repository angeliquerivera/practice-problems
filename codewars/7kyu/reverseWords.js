/**
 * `SOLVED`
 * READ:          00:13
 * NOTES:         00:54
 * APPROACH:      06:03
 * CODE:          03:03
 * TEST:          20:00 - stopped here because time limit
 * OPTIMIZE:      00:00
 */

/**
 * {@link https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript 7kyu - reverseWords}
 *
 * Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
 * Examples
 *
 * "This is an example!" ==> "sihT si na !elpmaxe"
 * "double  spaces"      ==> "elbuod  secaps"
 */

/**
 * R - Read; make sure you understand the problem
 * E - Make notes using provided examples; use additional, non provided inputs as well
 * A - Approach the problem by planning your steps in simple English
 * C - Code your approach
 * T - Test your code (and attempt your code if it passes initial tests)
 * O - Optimize; time & space complexity
 */

/**
 * NOTES
 * Function accepts string param
 * Output is each set of non-whitespace strings reversed in place
 * Every string space retained
 */

/**
 * APPROACH
 * declared reversedStr variable for empty str
 * START LOOP
 *    declare variable currChar to isolate current character index
 *    declare variable for last str character finalChar
 *    use replace method to swith currChar with lastChar
 * END LOOP
 * return reversed str
 */

/**
 * CODE BELOW
 */
// function reverseWords(str) {
//   let reversedStr = "";
//   for (let i = 0; i < str.length; i++) {
//     let currChar = str[i];
//     let finalChar = str[str.length - 1];
//     str.replace(currChar, finalChar);
//     console.log(str);
//     reversedStr += str;
//   }
//   return reversedStr;
// }

// "cat" => "tac"

/**
 * NEW APPROACH
 * declare final string variable
 * declare two separate pointers, startIdx; endIdx
 * START LOOP
 *  grab currChar
 *  IF (currChar IS NOT a whitespace)
 *    set start
 *  ELSE
 *
 * return final string
 */
//excalidraw.com/#room=c306ff2cc02bb7970590,WGvIZ6It_i0QtIrhQVByDQ

function reverseWords(str) {
  const reversedInitial = str.split("").reverse().join("");
  console.log("reversedInitial", reversedInitial);
  const splitInitial = reversedInitial.split(" ");
  console.log("splitInitial", splitInitial);
  const splitReversed = splitInitial.reverse();
  console.log("splitReversed", splitReversed);
  return splitReversed.join(" ");
}

// const result1 = reverseWords("This is an example!");
// const result2 = reverseWords("double  spaces");
// console.log(reverseWords("The quick brown fox jumps over the lazy dog."));
console.log(reverseWords("four    spaces"));

// console.log(result1);
// console.log(result2);

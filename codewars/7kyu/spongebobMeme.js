/**
 * `UNSOLVED`
 * TIMER (UPDATE ONLY ON PAUSE/COMPLETION)
 * REMEMBER TO SPLIT AFTER EVERY SECTION
 * TIME LIMIT: 30 MINS
 *
 * READ:          00:38
 * NOTES:         00:56
 * APPROACH:      04:29
 * CODE:          03:12
 * 2ND APPROACH   11:04
 * TEST:          00:00
 * OPTIMIZE:      00:00
 */

/**
* {@link https://www.codewars.com/kata/586f6741c66d18c22800010a/train/javascript 7kyu - spongebobMeme}
* Remember the spongebob meme that is meant to make fun of people by repeating what they say in a mocking way?

You need to create a function that converts the input into this format, with the output being the same string expect there is a pattern of uppercase and lowercase letters.

Example:

input:  "stop Making spongebob Memes!"
output: "StOp mAkInG SpOnGeBoB MeMeS!"

*/

/**
 * NOTES
 * param is string, sentence
 * sentence must alternate between uppercase and lowercase characters (letters)
 */

/**
 * APPROACH
 * declare variables for empty string
 * START LOOP
 *    grab currChar
 *    grab nextChar
 * END LOOP
 * Idea is to toUppercase sentence, then isolate certain characters to add to new string
 * After, toLowercase sentence, isolate every other and add those to new string with conditional
 * return sentence
 */

/**
 * CODE BELOW
 */
function spongeMeme(sentence) {
  let uppercaseStr = "";
  for (let i = 0; i < sentence.length; i++) {
    let currChar = sentence[i];
    let nextChar = sentence[i + 1];
  }
}

console.log(spongeMeme("stop Making spongebob Memes!"));

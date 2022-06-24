/**
 * `SOLVED AS OF 6-24-22`
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
* {@link https://www.codewars.com/kata/5982619d2671576e90000017/train/javascript 7kyu - spongebobMeme}
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
 * sentence must start with an uppercase letter
 */

/**
 * APPROACH
 * declare variable to store SPONGEBOB'D string; ""
 *
 * START LOOP
 *    grab currChar
 *    IF curr index is even
 *      add currChar uppercased to starting variable
 *    ELSE
 *      add currChar lowercased to starting variable
 * END LOOP
 * return spongebobStr
 */

/**
 * CODE BELOW
 */
function spongeMeme(sentence) {
  let spongebobStr = "";
  for (let i = 0; i < sentence.length; i++) {
    let currChar = sentence[i];

    if (i % 2 === 0) {
      spongebobStr += currChar.toUpperCase();
    } else {
      spongebobStr += currChar.toLowerCase();
    }
  }
  return spongebobStr;
}

const result1 = spongeMeme("stop Making spongebob Memes!");
const result2 = spongeMeme("STOP SCREAMING AT ME");
const result3 = spongeMeme("tHiS NeEdS To aLtErNaTe dIfFeReNtLy");
const result4 = spongeMeme("  UpPeRfIrSt lOwErCaSe   ");

console.log(result1, result1 === "StOp mAkInG SpOnGeBoB MeMeS!");
console.log(result2, result2 === "StOp sCrEaMiNg aT Me");
console.log(result3, result3 === "ThIs nEeDs tO AlTeRnAtE DiFfErEnTlY");
console.log(result4, result4 === "  UpPeRfIrSt lOwErCaSe   ");

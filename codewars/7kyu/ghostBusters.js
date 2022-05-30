/**
 * `UNSOLVED AS OF 5/30/2022`
 * TIMER (UPDATE ONLY ON PAUSE/COMPLETION)
 * REMEMBER TO SPLIT AFTER EVERY SECTION
 * TIME LIMIT: 30 MINS
 *
 * READ:          00:15
 * NOTES:         01:38
 * APPROACH:      01:51
 * CODE:          04:51
 * TEST:          08:16 - stopped here because not sure if scope issue but test results are confusing
 * OPTIMIZE:      00:00
 */

/**
 * {@link https://www.codewars.com/kata/5668e3800636a6cd6a000018/train/javascript 7kyu - ghostBusters (whitespace removal)}
 *
 * Oh no! Ghosts have reportedly swarmed the city. It's your job to get rid of them and save the day!

In this kata, strings represent buildings while whitespaces within those strings represent ghosts.

So what are you waiting for? Return the building(string) without any ghosts(whitespaces)!

Example:

ghostBusters("Sky scra per");

Should return:

"Skyscraper"

If the building contains no ghosts, return the string:

"You just wanted my autograph didn't you?"


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
 * param building is a str
 * whitespaces in string are "ghosts"
 * if building str contains whitespaces, get rid of them
 * if no whitespaces in building str, return "You just wanted my autograph didn't you?"
 */

/**
 * APPROACH
 * LOOP THROUGH to find spaces in building str
 *IF statement
  IF Building has whitespaces, get rid of them using trim method
  ELSE return string "You just wanted my autograph didn't you?"
  END LOOP
 */

/**
 * CODE BELOW
 */

function ghostBusters(building) {
  for (let i = 0; i < building.length; i++) {
    let currChar = building[i];
    if ((currChar = " ")) {
      return building.trim();
    } else {
      return "You just wanted my autograph didn't you?";
    }
  }
}
const result1 = ghostBusters("Sky scra per");
const result2 = ghostBusters("Factor y");
const result3 = ghostBusters("BusStation");

console.log(result1);
console.log(result2);
console.log(result3);

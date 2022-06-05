/**
 * `UNSOLVED as of 6/5/2022`
 * TIMER (UPDATE ONLY ON PAUSE/COMPLETION)
 * REMEMBER TO SPLIT AFTER EVERY SECTION
 * TIME LIMIT: 30 MINS
 *
 * READ:          01:32
 * NOTES:         03:39
 * APPROACH:      07:14
 * CODE:          06:49 -> stopped here as I think I misinterpreted the problem and got confused
 * TEST:          00:00
 * OPTIMIZE:      00:00
 */

/**
 * {@link https://www.codewars.com/kata/52761ee4cffbc69732000738 6kyu - goodVsEvil}
 *
 *Middle Earth is about to go to war. The forces of good will have many battles with the forces of evil. Different races will certainly be involved. Each race has a certain worth when battling against others. On the side of good we have the following races, with their associated worth:

    Hobbits: 1
    Men: 2
    Elves: 3
    Dwarves: 3
    Eagles: 4
    Wizards: 10

On the side of evil we have:

    Orcs: 1
    Men: 2
    Wargs: 2
    Goblins: 2
    Uruk Hai: 3
    Trolls: 5
    Wizards: 10

Although weather, location, supplies and valor play a part in any battle, if you add up the worth of the side of good and compare it with the worth of the side of evil, the side with the larger worth will tend to win.

Thus, given the count of each of the races on the side of good, followed by the count of each of the races on the side of evil, determine which side wins.
Input:

The function will be given two parameters. Each parameter will be a string of multiple integers separated by a single space. Each string will contain the count of each race on the side of good and evil.

The first parameter will contain the count of each race on the side of good in the following order:

    Hobbits, Men, Elves, Dwarves, Eagles, Wizards.

The second parameter will contain the count of each race on the side of evil in the following order:

    Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards.

All values are non-negative integers. The resulting sum of the worth for each side will not exceed the limit of a 32-bit integer.
Output:

Return "Battle Result: Good triumphs over Evil" if good wins, "Battle Result: Evil eradicates all trace of Good" if evil wins, or "Battle Result: No victor on this battle field" if it ends in a tie.
 */

/**
 * NOTES
 * function takes two string params, count of good races and count of bad races
 * resulting sum determines which "wins"
 * if evil races count wins, return "Battle Result: Evil eradicates all trace of Good", if good races count wins, return "Battle Result: Good triumphs over Evil", "Battle Result: No victor on this battlefield" if it's a tie
 */

/**
 * APPROACH
 * declare variables for each string param
 * START LOOPS for each string param
 *    grab currValue from each loop
 * END LOOPS
 * declare variables goodGuysCount badGuyscount for sum of numbers in string params
 * 3 conditions for IF statement
 *    IF goodGuysCount is greater than badGuyscount, return string "Battle Result: Good triumphs over Evil"
 *    ELSE IF badGuysCount is greater than goodGuysCount, return string "Battle Result: Evil eradicates all trace of Good"
 *    ELSE both sums are equal, return string "Battle Result: No victor on this battlefield"
 */

/**
 * CODE BELOW
 */

function goodVsEvil(good, evil) {
  for (let i = 0; i < good.length; i++) {
    let currGoodGuy = good[i];

    for (let j = 0; j < evil.length; j++) {
      let currBadGuy = evil[j];
    }
  }
}

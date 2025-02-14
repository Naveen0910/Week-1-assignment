/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  var lp = 0;
  var rp = str.length - 1;
  while (lp < rp) {
    if (str[lp] !== str[rp]) {
      return false;
    }
    lp++;
    rp--;
  }
  return true;
}

console.log(isPalindrome("mnavan"));

module.exports = isPalindrome;

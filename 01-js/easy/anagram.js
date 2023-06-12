/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const letterCount1 = {};
  for (var i = 0; i < str1.length; i++) {
    const letter = str1[i];
    letterCount1[letter] = (letterCount1[letter] || 0) + 1;
  }

  const letterCount2 = {};
  for (var i = 0; i < str2.length; i++) {
    const letter = str2[i];
    letterCount2[letter] = (letterCount2[letter] || 0) + 1;
  }

  return _.isEqual(letterCount1, letterCount2);
}

module.exports = isAnagram;

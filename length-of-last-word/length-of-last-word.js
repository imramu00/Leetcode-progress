/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let word = s.trim().split(' ')
    n = word.length - 1
    return word[n].length
};
/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let ans = 0
    for(let i=0; i<sentences.length; i++){
        ans = Math.max(ans,sentences[i].split(' ').length)
    }
    return ans
};
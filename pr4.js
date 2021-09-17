/*Write a JavaScript function that checks whether a passed string is palindrome or not.
A palindrome is a word, phrase, or sequence that reads the same backward as forward,
 e.g., madam or nurses run.*/

 
function isStringPalindrome(str) {
  var strNoSpaces =str.split(" ").join("");
    var reversedStr = strNoSpaces.split("").reverse().join("");

    if(reversedStr === strNoSpaces) return true;

    return false;
    
}

console.log(isStringPalindrome("madam"));



  
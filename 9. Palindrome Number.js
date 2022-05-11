/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    var isTrue = true;
    var x = x+'';
    for (let i = 0; i < x.length; i++) {
       if( x[i] !== x[x.length-i-1]) {
           isTrue = false; 
           break;
        }        
    }
    return isTrue;
};

console.log(isPalindrome(-121))
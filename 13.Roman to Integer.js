/**
 * @param {string} s
 * @return {number}
 */


 var romanToInt = function(s) {
     var sum = 0;
    for (let i = 0; i < s.length; i++) {
        switch(s[i]){
            case 'M':
                sum += 1000;
                break;
            case 'D':
                sum += 500;
                break;     
            case 'C':
                if(s[i+1] ==='M') {
                    sum += 900;
                    i++;
                }else if(s[i+1] ==='D') {
                    sum += 400;
                    i++;
                }else { sum += 100; }
                break;
            case 'L':
                sum += 50;
                break;
            case 'X':
                if(s[i+1] ==='C') {
                    sum += 90;
                    i++;
                }else if(s[i+1] ==='L') {
                    sum += 40;
                    i++;
                } else { sum += 10;}
                break;
            case 'V':
                sum += 5;
                break;
            case 'I':
                if(s[i+1] ==='X') {
                    sum += 9;
                    i++;
                }else if(s[i+1] ==='V') {
                    sum += 4;
                    i++;
                }else {sum += 1;}
                break;               
        }
    }
    return sum;
};

console.log(romanToInt('LVIII'))
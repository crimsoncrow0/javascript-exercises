
const repeatString = function(x, num) {
    let repeatedString = '';

    if (num >= 0) {
        for (let i = 1; i <= num; i++) {
            repeatedString += x;
        }
        return repeatedString;
    }
    else {
        return 'ERROR';
    }
    
};

// Do not edit below this line
module.exports = repeatString;

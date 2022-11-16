const reverseString = function(x) {
    reversed = '';
    stringLength = x.length;
    for (let i = stringLength; i > 0; i--) {
        reversed += x[i-1];
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;

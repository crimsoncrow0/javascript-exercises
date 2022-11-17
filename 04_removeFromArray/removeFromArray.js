const removeFromArray = function(a,x) {
    // Remove multiple values    
    for (let i = 1; i < arguments.length; i++) {

        if (a.includes(arguments[i])) {
            let ind = a.indexOf(arguments[i]);
            a.splice(ind,1);
        }
    }
    // Ignore non present values
    // Only removes same type
    
    return a;
};

// Do not edit below this line
module.exports = removeFromArray;

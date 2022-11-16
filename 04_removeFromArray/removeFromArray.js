const removeFromArray = function(a,x) {
    let ind = a.indexOf(x);
    a.splice(ind,1);
    return a;
};

// Do not edit below this line
module.exports = removeFromArray;

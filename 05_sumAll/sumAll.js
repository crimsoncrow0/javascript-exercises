const sumAll = function(x,y) {
    let total = 0;

    if (x >= 0 && y >= 0 && typeof x === "number" && typeof y === "number") {
        if (x < y) {
            for (let i = x; i <= y; i++) {
                total += i;
            }
        }
        else {
            for (let i = x; i >= y; i--) {
                total += i;
            }
        }
        return total;
    }
    return "ERROR";
};  

// Do not edit below this line
module.exports = sumAll;

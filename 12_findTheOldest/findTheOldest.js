const findTheOldest = function(array) {
    
    const oldest = array.sort((a,b) => {
        const first = a.yearOfDeath - a.yearOfBirth;
        const next = b.yearOfDeath - b.yearOfBirth;
        return (first > next ? -1 : 1 );
});
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
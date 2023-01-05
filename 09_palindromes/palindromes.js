function reverse(stringEnd) {
    let reversed = '';
    for (let i = stringEnd.length - 1; i >= 0; i--) {
        reversed += stringEnd[i];
    };
    return reversed;
}

const palindromes = function (palindrome) {
    //lowercase
    let text = palindrome.toLowerCase()
    // remove characters and spaces
    text = text.replaceAll(' ','');
    text = text.replaceAll('!', '');
    text = text.replaceAll(',', '');
    text = text.replaceAll('.', '');
    let length = Math.round(text.length);
    let start = text.slice(0, Math.round(text.length / 2));
    let end = text.slice(Math.floor(text.length / 2) );

    // reverse second half of string
    const endReversed = reverse(end);

     //if first half = reverse of second half, output true
    if (endReversed === start) {
        return true
    }
    return false

};



// Do not edit below this line
module.exports = palindromes;

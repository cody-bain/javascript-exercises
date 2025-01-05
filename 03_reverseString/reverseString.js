const reverseString = function (string) {
    const indexedString = string.split('');
    for (i = 0; i < string.length; i++) {
        char = indexedString.shift();
        indexedString.splice(string.length - (i + 1), 0, char);
    }
    return indexedString.join("");
};

// Do not edit below this line
module.exports = reverseString;
console.log(reverseString("Reverse"));

const palindromes = function (word) {
    word = word.toLowerCase();
    word = word.replace(/[^a-zA-Z0-9]/g, '');
    const revWord = word.split('').reverse().join('');
    console.log(`${revWord} and ${word}`);
    return revWord === word;
};

// Do not edit below this line
module.exports = palindromes;

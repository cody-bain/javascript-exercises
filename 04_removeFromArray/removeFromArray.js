const removeFromArray = function (array) {
    for (arg = 1; arg < arguments.length; arg++) {
        for (i = 0; i < array.length; i++) {
            if (array[i] === arguments[arg]) {
                array.splice(i, 1);
                i--;
            }
        }
    };
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
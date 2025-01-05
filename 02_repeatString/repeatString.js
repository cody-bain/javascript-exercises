const repeatString = function (repeatStr, num) {
    let returnStr = '';
    if (num < 0) { returnStr = 'ERROR'; }
    else {
        for (i = 0; i < num; i++) {
            returnStr = returnStr.concat(repeatStr);
        }
    }
    return returnStr;
};

// Do not edit below this line
module.exports = repeatString;

const fibonacci = function (fibIndex) {
    let fibArray = [1];

    if (fibIndex == 0) { return 0; }
    if (fibIndex == 1) { return 1; }
    if (fibIndex < 0) { return "OOPS"; }

    for (let i = 1; i < fibIndex; i++) {
        backTwo = fibArray[i - 2] ? fibArray[i - 2] : 0;
        backOne = fibArray[i - 1] ? fibArray[i - 1] : 0;
        fibArray.push(backTwo + backOne);
    }

    return fibArray[fibArray.length - 1];
};

// 1 1 2 3 5 8

// Do not edit below this line
module.exports = fibonacci;

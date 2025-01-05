const sumAll = function (...args) {
    let startIdx = args[0] < args[1] ? args[0] : args[1];
    const endIdx = args[0] < args[1] ? args[1] : args[0];
    let sum = 0;
    if (startIdx > 0 && endIdx > 0 &&
        !(startIdx % 1) && !(endIdx % 1) &&
        typeof startIdx == "number" && typeof endIdx === "number") {

        for (startIdx; startIdx <= endIdx; startIdx++) {
            sum += startIdx;
        }
        return sum;
    }
    else {
        return "ERROR";
    }
};
// Do not edit below this line
module.exports = sumAll;

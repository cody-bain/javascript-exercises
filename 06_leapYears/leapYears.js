const leapYears = function (year) {
    if (!(year % 100)) { return (!(year % 400)) ? true : false; }
    else if (!(year % 4)) { return true; }
    else { return false; }
};

leapYears(1997);
// Do not edit below this line
module.exports = leapYears;

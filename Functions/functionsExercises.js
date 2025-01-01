function twoFer(person) {
    if (person === void 0) { person = "you"; }
    return "one for ".concat(person, ", one for me");
}
console.log(twoFer());
console.log(twoFer("Alpy"));
var isLeapYear = function (year) {
    if (year % 4 === 0 && year % 100 !== 0) {
        return true;
    }
    else if (year % 400 === 0) {
        return true;
    }
};
var isLeapYear2 = function (year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};
console.log(isLeapYear(2012));
console.log(isLeapYear2(2013));

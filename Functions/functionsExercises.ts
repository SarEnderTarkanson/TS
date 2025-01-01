function twoFer(person: string = "you"): string {
  return `one for ${person}, one for me`;
}
console.log(twoFer());
console.log(twoFer("Alpy"));
const isLeapYear = (year: number): boolean => {
  if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  } else if (year % 400 === 0) {
    return true;
  }
};

const isLeapYear2 = (year: number): boolean => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

console.log(isLeapYear(2012));
console.log(isLeapYear2(2013));

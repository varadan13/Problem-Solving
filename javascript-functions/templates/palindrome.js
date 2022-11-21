const removeNonAlphanumericChars = (str) => str?.replace(/[^0-9a-zA-Z]/gi, "");

const stringPalindromeTest = (str) =>
  str === str?.split("")?.reverse()?.join("");

const test1 = (str) => stringPalindromeTest(removeNonAlphanumericChars(str));

const recurToReverse = (dep, grow) => {
  if (dep === 0) {
    return grow;
  }
  return recurToReverse(Math.floor(dep / 10), grow * 10 + (dep % 10));
};

const recurToReverse2 = (dep) => {
  if (dep === 0) {
    return 0;
  }
  return 10 * recurToReverse2(Math.floor(dep / 10)) + (dep % 10);
};

const reverseNumbers = (num) => {
  if (num < 0) {
    throw new Error("Requires Positive Number");
  }
  return recurToReverse2(num);
};

console.log(reverseNumbers(112345));

const testPalindrome = (str) => {
  let str2 = str.replace(/[^a-zA-Z0-9]/gi, "");
  return str2 === str2.split("").reverse().join("");
};

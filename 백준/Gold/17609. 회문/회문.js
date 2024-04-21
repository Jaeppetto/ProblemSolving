const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input.shift());

function isPalindrome(string) {
  return string === string.split("").reverse().join("");
}

function isAlikePalindrome(string) {
  const splittedString = string.split("");

  for (let i = 0; i <= Math.floor(splittedString.length / 2); i++) {
    if (splittedString[i] !== splittedString[splittedString.length - 1 - i]) {
      const firstSplitted = splittedString
        .slice(0, i)
        .concat(splittedString.slice(i + 1))
        .join("");
      const lastSplitted = splittedString
        .slice(0, splittedString.length - 1 - i)
        .concat(splittedString.slice(splittedString.length - i))
        .join("");

      return isPalindrome(firstSplitted) || isPalindrome(lastSplitted);
    }
    if (i === Math.floor(splittedString.length - 1 - i)) {
      return isPalindrome(splittedString.slice(i, 1).join(""));
    }
  }
}

for (let i = 0; i < N; i++) {
  if (isPalindrome(input[i])) {
    console.log(0);
  } else if (isAlikePalindrome(input[i])) {
    console.log(1);
  } else {
    console.log(2);
  }
}
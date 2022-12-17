// Assignment Code
const lowerCased = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const upperCased = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

function passwordOptions() {
  let passwordLength = parseInt(
    prompt(
      "How many characters should your password contain? Plese select a number between 8 and 128"
    ),
    10
  );
  if (Number.isNaN(passwordLength)) {
    alert("Error: Pleae enter a number");
    return null;
  }
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please select a number between 8 and 128");
    return null;
  }
  let includeLower = confirm("Click OK to include lowercase characters.");
  let includeUpper = confirm("Click OK to  include uppercase characters.");
  let includeSpecial = confirm("Click OK to  include special characters.");
  let includeNumber = confirm("Click OK to include numeric characters.");

  if (
    includeLower == false &&
    includeUpper == false &&
    includeSpecial == false &&
    includeNumber == false
  ) {
    alert("You must select at least one character type");
    return null;
  }
let options = {
    passwordLength: passwordLength,
    includeLower: includeLower,
    includeUpper: includeUpper,
    includeSpecial: includeSpecial,
    includeNumber:includeNumber,
};

return options
}

function generate() {}

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", passwordOptions);

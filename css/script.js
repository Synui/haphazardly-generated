// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Array of password options
var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialSym = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "~", "]", "^", "_", "`", "{", "|", "}"];

// Options that the user can choose from aswell as the allowed character length parameter
function passwordConditions() {
  var cogent = false;
  do {
    var length = prompt("Choose the length of the password between 8 and 128 characters");
    var confirmLower = confirm("Would you like to add lowercase letters?");
    var confirmUpper = confirm("Would you like to add uppercase letters?");
    var confirmNumbers = confirm("Would you like to add numbers?");
    var confirmSpecial = confirm("Would you like to add special characters, i.e. * $ @ etc...?");
    var confirmations = {
      length: length,
      confirmLower: confirmLower,
      confirmUpper: confirmUpper,
      confirmNumbers: confirmNumbers,
      confirmSpecial: confirmSpecial,
    }
    if ((length < 8) ||(length > 128))
      alert("Choose a number between 8 and 128")
    else if ((!confirmLower)&&(!confirmUpper)&&(confirmNumbers)&&(confirmSpecial))
      alert("Must choose atleast one type of character!")
    else cogent = true;
  } while(cogent);
  return confirmations;
};



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Array of password options
var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
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
    var conditions = {
      length: length,
      confirmLower: confirmLower,
      confirmUpper: confirmUpper,
      confirmNumbers: confirmNumbers,
      confirmSpecial: confirmSpecial
    }
    if ((length < 8)||(length > 128))
      alert("Choose a number between 8 and 128.")
    else if ((!confirmLower)&&(!confirmUpper)&&(!confirmNumbers)&&(!confirmSpecial))
      alert("Must choose atleast one type of character!")
    else cogent = true;
  } while(!cogent);
  return conditions;
};

// Creates the combinations based off of the passwordConditions function
function generatePassword() {
  var passwordCreate = passwordConditions();
  var passwordMeld = [];
  var passwordResult = "";

  if (passwordCreate.confirmLower) {
    for (var i of lowerLetters)
      passwordMeld.push(i);
  }
  if (passwordCreate.confirmUpper) {
    for (var i of upperLetters)
      passwordMeld.push(i);
  }
  if (passwordCreate.confirmNumbers) {
    for (var i of numbers)
      passwordMeld.push(i);
  }
  if (passwordCreate.confirmSpecial) {
    for (var i of specialSym)
      passwordMeld.push(i);
  }
  // console.log(passwordMeld);

  for (var i = 0; i < passwordCreate.length; i++) {
    passwordResult += passwordMeld[Math.floor(Math.random() * passwordMeld.length)];
  }
  // console.log(passwordResult);

  return passwordResult;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

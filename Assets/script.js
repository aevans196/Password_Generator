// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passwordlength = prompt("Enter the length of the password (8-128 characters):");

  // Check if the input is valid and within the specified range
  if (passwordlength < 8 || passwordlength > 128 || isNaN(passwordlength)) {
    alert("Password length must be between 8 and 128 characters.");
    return "";
  }

  var passwordcharacters = "";
  var passwordlower = confirm("Include lowercase letters?");
  var passwordupper = confirm("Include uppercase letters?");
  var passwordnumber = confirm("Include numbers?");
  var specialcharacter = confirm("Include special characters?");

  // Check if at least one character type is selected
  if (!(passwordlower || passwordupper || passwordnumber || specialcharacter)) {
    alert("At least one character type must be selected.");
    return "";
  }

  var passwordlowerstring = "abcdefghijklmnopqrstuvwxyz";
  var passwordupperstring = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordnumberstring = "0123456789";
  var passwordcharactersstring = "!@#$%^&*()<>";

  if (passwordlower) {
    passwordcharacters += passwordlowerstring;
  }
  if (passwordupper) {
    passwordcharacters += passwordupperstring;
  }
  if (passwordnumber) {
    passwordcharacters += passwordnumberstring;
  }
  if (specialcharacter) {
    passwordcharacters += passwordcharactersstring;
  }

  var password = "";
  for (var i = 0; i < passwordlength; i++) {
    var randomindex = Math.floor(Math.random() * passwordcharacters.length);
    password += passwordcharacters[randomindex];
  }
  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password) {
    passwordText.value = password;
  }
}

// Add an event listener to the generate button
generateBtn.addEventListener("click", writePassword);
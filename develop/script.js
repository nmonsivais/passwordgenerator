// Assignment Code
var generateBtn = document.querySelector("#generate");
// variables //
var userLowCase;
var userUpCase;
var userSpecChar;
var userNumChoice;
var userPassLength;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  var lengthOfPass = prompt("Enter a number between '8' and '128'");
  if (lengthOfPass >= 8 && lengthOfPass <=128) {
    lengthOfPass = parseInt(lengthOfPass);
  }

}


// Add event listener to generate button
generateBtn.addEventListener("click", () => {
  writePassword;
});

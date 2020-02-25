// Assignment Code
var generateBtn = document.querySelector("#generate");
// variables //
var lowCase;
var upCase;
var specChar;
var numChoice;
var passLength;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  var lengthOfPass = prompt("Enter a number between '8' and '128' to select the length of your password.");
  if (lengthOfPass >= 8 && lengthOfPass <=128) {
    lengthOfPass = parseInt(lengthOfPass);

    var userLowCase = confirm("Should your password have lowercase letters? Click 'OK' for yes or 'Cancel' for no.");
    var userUpCase = confirm("Should your password have upercase letters? Click 'OK' for yes or 'Cancel' for no.");
    var userSpecChar = confirm("Should your password have special characters? Click 'OK' for yes or 'Cancel' for no.");
    var userNumChoice = confirm("Should your password have numbers? Click 'OK' for yes or 'Cancel' for no.");

  }
  else {
    alert("The length of your password must be between '8' and '128'.  Click OK to restart.")
  }


if (userLowCase === true) {
lowCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","w","x","y","z"];
for (i = 0; i < lowCase.length; i++);
}


}


// Add event listener to generate button
generateBtn.addEventListener("click", () => {
  writePassword;
});


//-------------temporarily hold my arrays---------------------//

// upcase = ["A","B","C","D","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// specChar = ["~","'","!","@","#","$","%","^","&","*","(",")","-","_","+","=","{","}","[","]","|","\\","/",":",";","\"","'","<",">",",",".","?"];

// numChoice = [0,1,2,3,4,5,6,7,8,9];
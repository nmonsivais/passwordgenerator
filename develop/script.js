// Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

//------------------------------------------------------//

//console log lowercase letters//

//-----------------Add all variables here---------------------//
var lowCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var upCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var num = [0,1,2,3,4,5,6,7,8,9]

//special character length = 19//
var speChar = ["!", "#", "$", "%", "&", "*", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_",]

// var characlength = prompt("Enter a number between '8' and '128'.");


//--------------------Create Prompts here--------------------//

function initClick() {

  alert("Hello boss.  Click ok to select your criteria.");
  //All criteria will be prompted as below and stored in individual variables.//
  var characlength = prompt("Enter a # between '8' and '128'");
  var userlowercase = prompt("If you want lowercase letters type 'yes'.  Otherwise, type 'no'.");
  var useruppercase = prompt("If you want uppercase letters type 'yes'.  Otherwise, type 'no'.");
  var userspecialcharacters = prompt("If you want special characters type 'yes'.  Otherwise, type 'no'.");

  console.log(characlength, userlowercase, useruppercase, userspecialcharacters);
}


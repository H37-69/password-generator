// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //: CODE GOES HERE
  var hasLowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'; 
  var hasUpperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numbers = '0123456789';
  var special = '#$%&\'()*+,-./:;<=>?@[\]^_`{|}~';
  
  var random = ''; 
  var possible = '';
  var password = ''; 
  var passwordLength = 12;

  var hasLowerCaseLetters = confirm('Do you want lowercase letters in this password?');

  var hasUpperCaseLetters = confirm('Do you want uppercase letters in this password?');

  var hasNumber = confirm('Do you want numbers in this password?');

  var hasSpecial = confirm('Do you want special characters in this passsword?');


  if (hasLowerCaseLetters){
    possible += lowerCaseLetters; 
   }
   if (hasUpperCaseLetters){
    possible += upperCaseLetters; 
   }
   if (hasNumber){
    possible += numbers; 
   }
   if (hasSpecial){
    possible += special; 
   }

for (var i = 0; i < passwordLength; i++) {

  var random = Math.floor(Math.random()* possible.length);
  console.log(random);
  password += possible[random];

}





return '';

  
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector(" rd");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var characterLength = 8;
var choicePik = [];

var specialCharPik = ['!','@','#','$','%','^','&','*','(',')','[',']','{','}','|','?','/','<','>'];
var lowerCasePik = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCasePik = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberPik = ['1','2','3','4','5','6','7','8','9','0'];

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctPromps = getPrompts();
  var passwordText = document.querySelector("#password");

  if (correctPromps) {
      var newPassword = generatePassword();
      passwordText.value = newPassword;
  } else {
      passwordText.value = "";
  }
}
function generatePassword() {
    var password = "";
    for(var i = 0; i < characterLength; i++) {
        var randomIndex = Math.floor(Math.random() * choicePik.length);
        password = password + choicePik[randomIndex];
    }
    return password;
}
function getPrompts(){
    choicePik = [];

    characterLength = parseInt(prompt("How many characters do you want your password to be? (8 - 128 characters"));

    if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
      alert("Character length has to be a number, 8 - 128 digits. Try again.");
      return false;
    }
    if (confirm("would you like lowercase letters in your password")) {
      choicePik = choicePik.concat(lowerCasePik);
    }
    if (confirm("would you like uppercase letters in your password")) {
      choicePik = choicePik.concat(upperCasePik);
    }
    if (confirm("would you like numbers in your password")) {
      choicePik = choicePik.concat(numberPik);
    }
    if (confirm("would you like special characters in your password")) {
      choicePik = choicePik.concat(specialCharPik);
    }
    return true;
}

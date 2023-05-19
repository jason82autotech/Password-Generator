// Assignment ode here
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");

var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var lowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
var uppercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var optionsVariable = "";

generateBtn.addEventListener("click", writePassword);
function writePassword() {

    //event.preventDefault();


    password.value === "";
    var randomString = "";


    var lowercaseLett = confirm("Do you want your password to contain lowercase letters?");
    var uppercaseLett = confirm("Do you want your password to contain uppercase letters?");
    var num = confirm("Do you want your password to contain numbers?");
    var specialChar = confirm("Do you want your password to contain special characters?");
    var passwordLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters.");

    if (passwordLength < 8 || passwordLength > 128) {
        alert("Your password is not between 8 characters and 128 characters. Please try again.");
        var passwordLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters.");
    }

    else if (lowercaseLett === false && uppercaseLett === false && num === false && specialChar === false) {
        alert("You must chose at least one password criteria.");
        var lowercaseLett = confirm("Do you want your password to contain lowercase letters?");
        var uppercaseLett = confirm("Do you want your password to contain uppercase letters?");
        var num = confirm("Do you want your password to contain numbers?");
        var specialChar = confirm("Do you want your password to contain special characters?");
    }

    if (lowercaseLett) {
        optionsVariable += lowercaseAlphabet;
    }

    if (uppercaseLett) {
        optionsVariable += uppercaseAlphabet;
    }

    if (num) {
        optionsVariable += numbers;
    }

    if (specialChar) {
        optionsVariable += specialCharacters;
    }

    for (var i = 0; i < passwordLength; i++) {
        randomString += optionsVariable.charAt(Math.floor(Math.random() * optionsVariable.length));
    }
    password.value = randomString;

}
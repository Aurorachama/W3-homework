// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// the password generation function
function generatePassword() {

  var upcase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowcase = "abcdefghijklmnopqrstuvwxyz"
  var number = "0123456789";
  // # , " and $ not included
  var spchar = " !%'()*+,-./:;<=>?@[\]^_`{|}~";

// Pseudocode/idea: either if moves on, else stops; or if stops else moves on
// considerations: the clarity, organization of the code? the logic?

// how about a for loop? yes? no?
// yo, while loop?

// debugging
// Confirmed: the function is running as intended 
// safe to delete this
  console.log("prompt start");

  // first prompt (length of password)
  var lengthPr = window.prompt("How many characters would you like the password to contain? (Type in numbers) (No less than 8 & No more than 128)", "");

  // debugging
  console.log(lengthPr);

  // first condition (length of password)
  if (lengthPr >= 8 && lengthPr <= 128) {

    // debugging
    console.log("length check pass");

    // second prompt (uppercase)
    var upcasePr = window.confirm("click OK to include Uppercase Letter");

    // debugging
    console.log("upper case " + upcasePr);

    //third prompt (lowercase)
    var lowcasePr = window.confirm("click OK to include Uppercase Letter");

    //debugging
    console.log("lower case "+ lowcasePr);

    //fourth prompt (numeric)
    var numPr = window.confirm("click OK to include Number");

    //dubugging
    console.log("number "+ numPr);

    //fifth prompt (special character)
    var spcharPr = window.confirm("click OK to include Special Characters");

    //debugging
    console.log("special character "+ spcharPr);
    
}


else{
// debugging
  console.log("length check fails");

  window.alert("Please try again. Length of Password must bewteen 8 and 128");
}

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

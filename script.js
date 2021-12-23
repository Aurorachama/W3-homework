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
  var passwordArray= "";
  var character = "";
  var upcase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowcase = "abcdefghijklmnopqrstuvwxyz";
  var numeric = "0123456789";
  // " not included
  var spchar = " !%'()$,#*+,-./:;<=>?@[\]^_`{|}~";

// debugging
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
    var lowcasePr = window.confirm("click OK to include Lowercase Letter");

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

    //WIP
  }
  else{
    // debugging
      console.log("length check fails");
    
      window.alert("Please try again. Length of Password must bewteen 8 and 128");
      }

      var length = lengthPr;

  while (passwordArray.length < lengthPr){

  item1 = Math.ceil(lowcase.length * Math.random()*Math.random());
  item2 = Math.ceil(upcase.length * Math.random()*Math.random());
  item3 = Math.ceil(numeric.length * Math.random()*Math.random());
  item4 = Math.ceil(spchar.length * Math.random()*Math.random());
  //hold = lowcase.charAt(item1);
  //character += hold;
  //character += upcase.charAt(item2);
  var hold;
  hold = (lowcasePr) ? (lowcase.charAt(item1)) : ("");  
  character += hold;
  character += (upcasePr) ? (upcase.charAt(item2)) : (""); 

  character += (numPr)? (numeric.charAt(item3)) : ("");
  character += (spcharPr)? (spchar.charAt(item4)) : ("");
  passwordArray = character;
  console.log(passwordArray);
  }

  //character += numeric.charAt(item3);
  //character += spchar.charAt(item4);
  



  //passwordArray = passwordArray.split('').sort(function(){return 0.5-Math.random()}).join('');  
console.log(passwordArray);
return passwordArray.substring(0,length);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

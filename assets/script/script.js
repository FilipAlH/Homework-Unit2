// Assignment Code
let generateBtn = document.querySelector("#generate");

//these are the containers for my possible characters
const capitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowers = "abcdefghijklmnopqrstuvwxyz"
const specials = ["\\", ".", "+", "*", "?", "[", "^", "]", "$", "(", ")", "{", "}", "=", "!", "<", ">", "|", ":", "-"];
const numbers = "1234567890"
//these will generate a random character from their respective sets
const randomCapital = capitals[Math.floor(Math.random() * capitals.length)];
const randomLower = lowers[Math.floor(Math.random() * lowers.length)];
const randomSpecial = specials[Math.floor(Math.random() * specials.length)];
const randomnumber = numbers[Math.floor(Math.random() * numbers.length)];
//this function will generate the password
function generatePassword() {
  let passSize = prompt("how many characters would you like your password to be? enter a number")
  //empty variables to store information later
  let choices = {};
  let trueChoices = [];
  //makes sure the password size is between 8 and 128 characters
  function checkSize() {
    if (passSize < 8 || passSize > 128) {
      confirm("Your password should be between 8 and 128 characters")
      running = true
      
      while (running) {
        passSize = prompt("Your password should be between 8 and 128 characters, how many characters would you like your password to be? enter a number")
        if (passSize >= 8 && passSize <= 128) {
          running = false
        };
      };
    };
  };

  checkSize()
  //prompts for criteria of password 
  let cap = confirm("Would you like any capital letters?")
  choices["capital letters"] = cap

  let low = confirm("Would you like any lowercase letters?")
  choices["lowercase letters"] = low

  let spec = confirm("Would you like any special characters?")
  choices["special characters"] = spec

  let num = confirm("Would you like any numbers?")
  choices["numbers"] = num

  //stores use selections in an array
  for (let i in choices) {
    if (choices[i] === true) {
      trueChoices.push(i)
    };
  };
  alert("you have selected the following criteria: " + trueChoices)

  if (trueChoices.length === 0) {
    alert("You have not selected any password criteria")
  };
  //stores generated array
  let generation = []
  let passNum = parseInt(passSize)

//generates a random choice from users list of choices and then generates a random character from that choice
  for (i = 0; i < passNum; i++) {
    let key = trueChoices[Math.floor(Math.random() * trueChoices.length)]
    if (key == "capital letters") {
      generation.push(capitals[Math.floor(Math.random() * capitals.length)])
    } else if (key == "lowercase letters") {
      generation.push(lowers[Math.floor(Math.random() * lowers.length)])
    } else if (key == "special characters") {
      generation.push(specials[Math.floor(Math.random() * specials.length)])
    } else if (key == "numbers") {
      generation.push(numbers[Math.floor(Math.random() * numbers.length)])
    }; 
  };
//joins array into string
  let final = generation.join('')
//does nothing if pass size is zero
  if (passSize === 0) {
    return
  }

  return final
};

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





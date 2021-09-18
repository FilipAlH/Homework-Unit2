// Assignment Code
let generateBtn = document.querySelector("#generate");

const capitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowers = "abcdefghijklmnopqrstuvwxyz"
const specials = ["\\", ".", "+", "*", "?", "[", "^", "]", "$", "(", ")", "{", "}", "=", "!", "<", ">", "|", ":", "-"];
const numbers = "1234567890"

const randomCapital = capitals[Math.floor(Math.random() * capitals.length)];
const randomLower = lowers[Math.floor(Math.random() * lowers.length)];
const randomSpecial = specials[Math.floor(Math.random() * specials.length)];
const randomnumber = numbers[Math.floor(Math.random() * numbers.length)];

let choices = {};
let trueChoices = [];

function generatePassword() {
  let passSize = prompt("how many characters would you like your password to be? enter a number")
  
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

  let cap = confirm("Would you like any capital letters?")
  choices["cap"] = cap

  let low = confirm("Would you like any lowercase letters?")
  choices["low"] = low

  let spec = confirm("Would you like any special characters?")
  choices["spec"] = spec

  let num = confirm("Would you like any numbers?")
  choices["num"] = num

  for (let i in choices) {
    if (choices[i] === true) {
      trueChoices.push(i)
      console.log(trueChoices)
    };
  };

  let generation = []
  console.log(passSize)

  let passNum = parseInt(passSize)
  console.log(typeof passNum)

  for (i = 0; i < passNum; i++) {
    let key = trueChoices[Math.floor(Math.random() * trueChoices.length)]
    if (key == "cap") {
      generation.push(capitals[Math.floor(Math.random() * capitals.length)])
      console.log("i added a capital")
    } else if (key == "low") {
      generation.push(lowers[Math.floor(Math.random() * lowers.length)])
      console.log("i added a lowercase")
    } else if (key == "spec") {
      generation.push(specials[Math.floor(Math.random() * specials.length)])
      console.log("i added a special character")
    } else if (key == "num") {
      generation.push(numbers[Math.floor(Math.random() * numbers.length)])
      console.log("i added a number")
    }; 
  };

  let final = generation.join('')

  if (passSize === 0) {
    return
  }

  if (generation.length === 0) {
      alert("You have not selected any password criteria")
  };

  console.log(final)
  return final
};

generatePassword()



// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





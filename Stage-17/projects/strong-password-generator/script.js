const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q",
    "R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l",
    "m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5",
     "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{",
     "[","}","]",",","|",":",";","<",">",".","?","/"];

// const noSpecialCharacters;

const passwordLength = 15;

const passwordsSection = document.getElementById("passwords-section")

const firstPasswordEl = document.getElementById("firstPassword-el");
const secondPasswordEl = document.getElementById("secondPassword-el");

let generatedPassword1 = "";
let generatedPassword2 = "";


function getRandomCharacter(array) {
    let randomNumber = Math.floor( Math.random() * array.length);
    return array[randomNumber];
}


function getPassword(whereToStorePassword) {
    for (let i = 0; i < passwordLength; i++) {
        whereToStorePassword += getRandomCharacter(characters);
    }
    return whereToStorePassword;
}

function showPasswords() {
    firstPasswordEl.textContent = getPassword(generatedPassword1);
    secondPasswordEl.textContent = getPassword(generatedPassword2);

    passwordsSection.id = "show-passwords-section";
}


function copyPassword(passwordToCopy) {
    passwordToCopy.onclick = function() {
        document.execCommand("copy");
    }
    
    passwordToCopy.addEventListener("copy", function(event) {
        event.preventDefault();
        if (event.clipboardData) {
          event.clipboardData.setData("text/plain", passwordToCopy.textContent);
        }
    });
    
}

copyPassword(firstPasswordEl)
copyPassword(secondPasswordEl)
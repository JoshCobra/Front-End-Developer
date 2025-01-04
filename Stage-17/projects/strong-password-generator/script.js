import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";

const firebaseConfig = {
    databaseURL: process.env.DATABASE_URL
}

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q",
    "R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l",
    "m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5",
     "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{",
     "[","}","]",",","|",":",";","<",">",".","?","/"];

const noSpecialCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q",
    "R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l",
    "m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5",
     "6", "7", "8", "9"];

const passwordLength = 15;

const passwordsSection = document.getElementById("passwords-section");
const checkBox = document.getElementById("toggle-special-character");

const firstPasswordEl = document.getElementById("firstPassword-el");
const secondPasswordEl = document.getElementById("secondPassword-el");

let specialCharacterPassOne = "";
let specialCharacterPassTwo = "";

let generatedPasswordOne = "";
let generatedPasswordTwo = "";


function getRandomCharacter() {
    let randomNumber;

    if (checkBox.checked) {
        randomNumber = Math.floor( Math.random() * characters.length);

        return characters[randomNumber];

    } else {
        randomNumber = Math.floor( Math.random() * noSpecialCharacters.length);

        return noSpecialCharacters[randomNumber];
    }
}


function getPassword(whereToStorePassword) {
    for (let i = 0; i < passwordLength; i++) {
        whereToStorePassword += getRandomCharacter();
    }

    return whereToStorePassword;
}


function showPasswords() {
    if (checkBox.checked) {
        firstPasswordEl.textContent = getPassword(specialCharacterPassOne);
        secondPasswordEl.textContent = getPassword(specialCharacterPassTwo);

        passwordsSection.id = "show-passwords-section";

    } else {
        firstPasswordEl.textContent = getPassword(generatedPasswordOne);
        secondPasswordEl.textContent = getPassword(generatedPasswordTwo);

        passwordsSection.id = "show-passwords-section";
    }
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
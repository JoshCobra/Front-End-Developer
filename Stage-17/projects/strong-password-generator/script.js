const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q",
    "R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l",
    "m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5",
     "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{",
     "[","}","]",",","|",":",";","<",">",".","?","/"];

// const noSpecialCharacters;

const passwordLength = 16;

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
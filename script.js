var morseAlphabet = [
    ".-", //A
    "-...", //B
    "-.-.", //C
    "-..", //D
    ".", //E
    "..-.", //F
    "--.", //G
    "....", //H
    "..", //I
    ".---", //J
    "-.-", //K
    ".-..", //L
    "--", //M
    "-.", //N
    "---", //O
    ".--.", //P
    "--.-", //Q
    ".-.", //R
    "...", //S
    "-", //T
    "..-", //U
    "...-", //V
    ".--", //W
    "-..-", //X
    "-.--", //Y
    "--.." //Z
];
function textToMorse(vstup) {
    var vystup = "";
    vstup = vstup.toUpperCase();
    for (var i = 0; i < vstup.length; i++) {
        var kod = vstup.charCodeAt(i);
        if (kod >= 65 && kod <= 90) { // A-Z
            vystup += morseAlphabet[kod - 65] + " ";
        }
        else if (kod === 32) { // space
            vystup += "/ ";
        }
    }
    return vystup;
}
function morseToText(vstup) {
    var vystup = "";
    var morseChars = vstup.split(" ");
    for (var i = 0; i < morseChars.length; i++) {
        if (morseChars[i] === "/") {
            vystup += " ";
        }
        else {
            var index = morseAlphabet.indexOf(morseChars[i]);
            if (index !== -1) {
                vystup += String.fromCharCode(index + 65);
            }
        }
    }
    return vystup;
}
/*// Test cases
console.log(textToMorse("HELLO WORLD"));
console.log(textToMorse("MMM FEMBOYS"));
console.log(textToMorse("Pourin bubbly, drank that muddy"));
console.log(textToMorse("Future"));
console.log(morseToText(".... . .-.. .-.. --- / .-- --- .-. .-.. -.."));
console.log(morseToText("-- -- -- / ..-. . -- -... --- -.-- ..."));
console.log(morseToText(".--. --- ..- .-. .. -. / -... ..- -... -... .-.. -.-- --..-- / -.. .-. .- -. -.- / - .... .- - / -- ..- -.. -.. -.--"));
console.log(morseToText("..-. ..- - ..- .-. .")); */
// Propojení s HTML UI
window.onload = function () {
    var input = document.getElementById('inputText');
    var output = document.getElementById('outputText');
    var toMorseBtn = document.getElementById('ToMorseButton');
    var fromMorseBtn = document.getElementById('FromMorseButton');
    toMorseBtn.onclick = function () {
        output.value = textToMorse(input.value);
    };
    fromMorseBtn.onclick = function () {
        output.value = morseToText(input.value);
    };
};

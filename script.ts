const morseAlphabet = [
    ".-",  //A
    "-...",  //B
    "-.-.",  //C
    "-..",  //D
    ".",  //E
    "..-.",  //F
    "--.",  //G
    "....",  //H
    "..",  //I
    ".---",  //J
    "-.-",  //K
    ".-..",  //L
    "--",  //M
    "-.",  //N
    "---",  //O
    ".--.",  //P
    "--.-",  //Q
    ".-.",  //R
    "...",  //S
    "-",  //T
    "..-",  //U
    "...-",  //V
    ".--",  //W
    "-..-",  //X
    "-.--",  //Y
    "--.."  //Z
];

function textToMorse(vstup: string): string {
    let vystup:string = "";
    vstup = vstup.toUpperCase();
    for (let i:number = 0; i < vstup.length; i++) {
        let kod:number = vstup.charCodeAt(i);
        if (kod >= 65 && kod <= 90) { // A-Z
            vystup += morseAlphabet[kod - 65] + " ";
        } else if (kod === 32) { // space
            vystup += "/ ";
        }
    }


    return vystup;
}

function morseToText(vstup: string): string {
    let vystup:string = "";
    let morseChars:string[] = vstup.split(" "); 
    for (let i:number = 0; i < morseChars.length; i++) {
        if (morseChars[i] === "/") {
            vystup += " ";
        } else {
            let index:number = morseAlphabet.indexOf(morseChars[i]);
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
window.onload = () => {
    const input = document.getElementById('inputText') as HTMLTextAreaElement;
    const output = document.getElementById('outputText') as HTMLTextAreaElement;
    const toMorseBtn = document.getElementById('ToMorseButton') as HTMLButtonElement;
    const fromMorseBtn = document.getElementById('FromMorseButton') as HTMLButtonElement;

    toMorseBtn.onclick = () => {
        output.value = textToMorse(input.value);
    };

    fromMorseBtn.onclick = () => {
        output.value = morseToText(input.value);
    };
};
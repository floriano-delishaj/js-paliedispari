function randomNumber (minNum, maxNum) {

    const result = Math.floor(Math.random() * ((maxNum + 1) - minNum)) + minNum;
    return result;

}


let pcNum = randomNumber(1,5);
let pari = false;
let pariInput;
let dispariInput;

let userInput = parseInt(prompt('Scegli se pari(1) o dispari(2)'));

if (userInput === 1) {

    pariInput = parseInt(prompt('Hai scelto pari, quindi digita un numero pari fino a 5 escluso lo 0'));

    if (pariInput % 2 === 0 && pariInput < 5) {

        pari = true;

    } else {

        console.log('digita un numero pari');

    }

} else if (userInput === 2) {

    dispariInput = parseInt(prompt('Hai scelto dispari, quindi digita un numero dispari fino a 5'));

    if (dispariInput % 2 !== 0 && dispariInput <=5) {

        pari = false;

    } else {

        console.log('digita un numero dispari')

    }

}

if (pari) {
    console.log(pariInput)
} else {
    console.log(dispariInput)
}

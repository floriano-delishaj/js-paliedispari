function randomNumber (minNum, maxNum) {

    const result = Math.floor(Math.random() * ((maxNum + 1) - minNum)) + minNum;
    return result;

}

function isEven (value) {
    if (value %2 == 0)
		return true;
	else
		return false;
}

let somma = 0;

let userInput = prompt('Scegli se Pari o Dispari');
console.log('L\'utente ha scelto:', userInput)

let numInput = parseInt(prompt('Scegli un numero fino a 5'));
console.log('Il numero dell\'utente è:', numInput)

let pcNum = randomNumber(1,5);
console.log('Il numero del pc è', pcNum)

somma = pcNum + numInput;

let calc = isEven(somma);

if (calc) {
    console.log('Ha vinto il numero PARI');
} else {
    console.log('Ha vinto il numero DISPARI');
}




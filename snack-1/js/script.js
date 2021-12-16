const inputParola = prompt('Inserisci parola');
let carattere;
let carattereInverso = '';
let parolaInversa = charReverse(carattere)


if (inputParola === carattereInverso) {
    console.log('la parola è palindroma');
} else {
    console.log('la parola NON è palindroma');
}

function charReverse(carattere) {
    
    let i = inputParola.length - 1;

    while (i >= 0) {
        carattere = inputParola[i];
        carattereInverso += carattere;
        i--;
    }
}

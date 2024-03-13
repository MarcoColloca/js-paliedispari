/////////// Java Script Pari e Dispari  \\\\\\\\\\\\\

console.log('JS Trieal')


/// creare un prompt dove viene richiesto pari o dispari
/// creare un secondo prompt dove viene richiesto di inserire un numero da 1 a 5
/// generiamo un numero casuale con una funzione (userò mathrandom.)
/// sommo i due numeri


// let userChoice = prompt('Scegli pari o dispari.'); // String


const userNumberDOMElement = document.getElementById('user-number');

const pcNumberDOMElement = document.getElementById('pc-number');

const resultDOMElement = document.getElementById('result')

const palyButtonDOMElement = document.getElementById('game-button')








//let userNumber = parseInt(prompt('inserisci un numero da 1 a 5')); // Number





palyButtonDOMElement.addEventListener('click', function(){
    
    const userChoiceEvenDOMElement = document.getElementById('even').checked;

    const userChoiceOddDOMElement = document.getElementById('odd').checked;

    // predichiarazione di una variabile da utilizzare dopo
    let userChoice
    if (userChoiceEvenDOMElement === true){
        userChoice = 'pari';
        console.log('il giocatore ha scelto pari');
    }else if (userChoiceOddDOMElement === true){
        userChoice = 'dispari';
        console.log('il giocatore ha scelto dispari');
    }

    
    // valori minimi e massimi del numero richiesto all'utente
    let minNumber = 1;
    let maxNumber = 5;
    let userNumber

    // ciclo while che richiede un numero all'utente fino a quando non iserisce il numero corretto (compreso tra 1 e 5)
    while(isNaN(userNumber) || userNumber < minNumber || userNumber > maxNumber) {
        userNumber = parseInt(prompt("inserisci un numero da 1 a 5")); //Number
    }
    console.log('numero del giocatore: ' + userNumber)
    userNumberDOMElement.innerHTML = 'Tu: ' + userNumber;

    // generazione di un numero casuale da 1 a 5
    let computerNumber = Math.floor(Math.random() * maxNumber) + minNumber;
    console.log('numero del computer: ' + computerNumber)

    pcNumberDOMElement.innerHTML = 'PC: ' + computerNumber;



    // somma tra numero dell'utente e numero del pc
    gameSum = userNumber + computerNumber;
    console.log(gameSum)

    // controllo tramite funzione che riporta se la somma è pari o dispari (true = pari , false = dispari)
    const gameSumCheck = isEven(gameSum)


    // dichiarazione del risultato tramite funzione
    let gameResult = youWin(userChoice, gameSumCheck, gameSum)




    /*
    if(userChoice === 'pari' && gameSumCheck === true){
        console.log('Hai Vinto!')
        resultDOMElement.innerHTML = 'Risultato: ' + gameSum + ' hai Vinto!';
    }else if (userChoice === 'dispari' && gameSumCheck === false){
        console.log('Hai Vinto!')
        resultDOMElement.innerHTML = 'Risultato: ' + gameSum + ' hai Vinto!';
    } else{
        console.log('Hai Perso!')
        resultDOMElement.innerHTML = 'Risultato: ' + gameSum + ' hai Perso!';
    }
    */
    
})










// ↓ ↓ ↓ ↓ ↓ My Functions ↓ ↓ ↓ ↓ ↓ \\



/// dichiaro una funzione (isPalindrome) a cui assegno 1 parametri (word)
function isPalindrome(word){
    /// dichiaro una variabile che rappresenti l'ultimo index della mia parola
    let wordLastIndex = word.length - 1;
    /// creo un ciclo for che vada a controllare le lettere della mia parola fino a metà della parola stessa
    for(let wordLetters = 0; wordLetters < word.length / 2; wordLetters++){
        /// creo una condizione: SE la lettera corrente (partendo da 0 è la prima), risulta diversa dall'ultima lettera della parola
        if(word[wordLetters] !== word[wordLastIndex - wordLetters]){
            /// la funzione mi ritorna falso
            return false;
        }
        /// in caso le lettere sono uguali e non entro nell'if, riduco l'index dell'ultima lettera e ripeto il ciclo for
        /// wordLastIndex--;
    }
    /// se finisco il ciclo for, senza mai essere entrato nell'if, la funzione ritorna come risultato true
    return true;
}




/// dichiaro una funzione per stabilire se un numero dato è pari
function isEven(number){
    /// dichiaro una variabile che corrisponda al modulo 2 del numero (il resto ottenuto dividendo il numero per 2 sarà 0)
    let rest = number % 2;

    // SE il resto sarà quindi 0
    if(rest === 0){
        // ritornerà true
        return true;
    // ALTRIMENTI se il resto sarà diverso da 0        
    }else{
        // ritornerà false
        return false;
    }

}



function youWin(choice, check, sum){

    if(choice === 'pari' && check === true || choice === 'dispari' && check === false){
        console.log('Hai Vinto!')
        resultDOMElement.innerHTML = 'Risultato: ' + sum + ' hai Vinto!'
        return true;
    }else{
        console.log('Hai Perso!')
        resultDOMElement.innerHTML = 'Risultato: ' + sum + ' hai Perso!';
        return false;       
    }
}
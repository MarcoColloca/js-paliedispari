////////// Java Script Is Palindrome \\\\\\\\\\


console.log('JS Trieal')



/// costante che permette di creare un promt in cui viene richiesta una parola
const userWord = prompt('Inserisci una parola!')
// const userWord = 'anna'



/// costante per verificare se la parola inserita dall'utente nel prompt, è palindroma
const wordCheck = isPalindrome(userWord);

/// SE il risultato di wordCheck corrisponde a true 
if(wordCheck === true){
    /// viene stampato che la parola inserita dall'utente è palindroma
    console.log(userWord + ' è palindroma');
 // ALTRIMENTI viene stampato che la parola inserita non è palindroma   
}else{
    console.log(userWord + ' non è palindroma');
}
















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
console.log('JS Trieal')


//// dichiaro una funzione (isPalindrome) a cui assegno 1 parametri (word)








function isPalindrome(word){

    let wordLastIndex = word.length - 1
    for(wordLetters = 0; wordLetters < word.length / 2; wordLetters++){
        if(word[wordLetters] !== word[wordLastIndex]){
            return false;
        }
        wordLastIndex--
    }
    return true
}



const wordCheck = isPalindrome('anna')

console.log(wordCheck)




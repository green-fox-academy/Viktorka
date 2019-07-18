export default function anagramChecker(word1: string, word2: string) {
    let wordArray1: string[] = word1.split("").sort();
    let wordArray2: string[] = word2.split("").sort();

    let wordArray1JoinedTogether: string = wordArray1.join()
    let wordArray2JoinedTogether: string = wordArray2.join()
    if (wordArray2JoinedTogether==wordArray1JoinedTogether){
        return true
    } else {
        return false
    }

}


console.log(anagramChecker("alma", "beea"))
'use struct'
export function anagramChecker(firstWord: string, secondWord: string): boolean {
    let myBoolean: boolean = false;
    // let arrayOfFirstWordLetters: string [] = [];
    // let arrayOfSecondWordLetters: string [] = [];
    if (firstWord.length !== secondWord.length) {
        return false;
    } else {
        let firstWordLettersOneByOne=firstWord.split('');
        let secondWordLettersOneByOne=secondWord.split('');
        // for (let j:number =0; j< firstWord.length; j++){
        //     arrayOfFirstWordLetters.push(firstWordLettersOneByOne[j])
        //     arrayOfSecondWordLetters.push(secondWordLettersOneByOne[j])
        // }
        if (firstWordLettersOneByOne.sort()===secondWordLettersOneByOne.sort()){
            myBoolean=true;
        }
    }
    for (let i: number = 0; i < firstWord.length; i++) {
        if (firstWord.length === secondWord.length) {
            myBoolean = true;
        }
        return myBoolean;
    }
}
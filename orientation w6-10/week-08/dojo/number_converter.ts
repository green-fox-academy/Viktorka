'use strict';

export function numberToStringConverter(inputNumber: number): string {
    let outputString: string = '';
    let oneToTenArray: string[] = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine '];
    let tenToHundredArray: string[] = ['', 'ten ', 'twenty ', 'thirty ', 'fourty ', 'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety '];
    if (inputNumber === 0) {
        outputString = 'null';
    } else if (inputNumber > 99 && inputNumber % 100 === 0) {
        outputString = oneToTenArray[Math.floor((inputNumber % 1000) / 100)] + 'hundred ';

    } else if (inputNumber > 99) {
        outputString = oneToTenArray[Math.floor((inputNumber % 1000) / 100)] + 'hundred and ';
    }
    outputString += tenToHundredArray[Math.floor((inputNumber % 100) / 10)];
    outputString += oneToTenArray[(inputNumber % 10)];

    if (inputNumber === 1) {
        outputString += 'dollar';
    } else {
        outputString += 'dollars';
    }
    return outputString;
}

export function stringToNumber(aNumberInString: string): number {
    let oneToTenArray: string[] = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let tenToHundredArray: string[] = ['', 'ten', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let numberAsNumber = 0;
    let checkIfIndexOfExist = 0;
    let numberString = aNumberInString.split(' ');
    if (numberString[1] === 'hundred') {
        numberAsNumber += oneToTenArray.indexOf(numberString[0]) * 100;
        if (numberString[2] === 'and') {
            checkIfIndexOfExist = oneToTenArray.indexOf(numberString[3]);
            if (checkIfIndexOfExist === -1) {
                numberAsNumber += tenToHundredArray.indexOf(numberString[3]) * 10;
                if (numberString[4] !== 'dollars' && numberString[4] !== 'dollar') {
                    numberAsNumber += oneToTenArray.indexOf(numberString[4]);
                }
            } else {
                numberAsNumber += oneToTenArray.indexOf(numberString[3]);
            }
        }
    } else {
        numberAsNumber += oneToTenArray.indexOf(numberString[0]);
    }
    if (numberAsNumber === -1) {
        numberAsNumber += tenToHundredArray.indexOf(numberString[0]) * 10 + 1;
        if (numberString[1] !== 'dollars' && numberString[1] !== 'dollar') {
            numberAsNumber += oneToTenArray.indexOf(numberString[1]);
        }
    }
    return numberAsNumber;
}
console.log(stringToNumber('three hundred and twenty five'))
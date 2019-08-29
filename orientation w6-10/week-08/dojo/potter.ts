export const books = {
    'first': 8,
    'second': 8,
    'third': 8,
    'fourth': 8,
    'fifth': 8
}

export function basketCalculator(numberOfBooks:{}): number {
    let basketPrice = 0;
    let discountAmount: number [] = [1, 0.95, 0.9, 0.8, 0.75]
    let keysOfMyBasket: string[] = Object.keys(numberOfBooks);

    for (let i: number = 0; i < keysOfMyBasket.length; i++) {
        basketPrice += 8 * numberOfBooks[keysOfMyBasket[i]];
    }

    basketPrice = basketPrice * discountAmount[keysOfMyBasket.length - 1];

    // basketPrice += books.first * numberOfBooks['first'];
    // basketPrice += books.second * numberOfBooks['second'];
    // basketPrice += books.third * numberOfBooks['third'];
    // basketPrice += books.fourth * numberOfBooks['fourth'];
    // basketPrice += books.fifth * numberOfBooks['fifth'];

  


    return basketPrice;
}


const ingredients: any[] = [
    { name: 'vodka', inStock: 1, needsCooling: true },
    { name: 'coffee_liqueur', inStock: 0, needsCooling: true },
    { name: 'fresh_cream', inStock: 1, needsCooling: true },
    { name: 'captain_morgan_rum', inStock: 2, needsCooling: true },
    { name: 'mint_leaves', inStock: 0, needsCooling: false },
    { name: 'sugar', inStock: 0, needsCooling: false },
    { name: 'lime juice', inStock: 0, needsCooling: true },
    { name: 'soda', inStock: 0, needsCooling: true }
];

function print() {
    function yesOrNo() {
        if (ingredients[4].needsCooling = true) {
            "Yes"
        } else {
            "no"
        }
    }
    console.log("+--------------------+---------------+----------+")
    console.log("| Ingredient         | Needs cooling | In stock |")
    console.log("+--------------------+---------------+----------+")
    for (let i: number = 0; i < 8; i++) {
        let a: any = ingredients[i].name;
        let b: any = ingredients[i].needsCooling
        let c: any = ingredients[i].inStock
        let d:any=a+yesOrNo()+c
        console.log("| "+a + " "+ " | "+ yesOrNo() +" | " + c + "|");
    }
}
print()

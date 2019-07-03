/* Create a map with the following key-value pairs.

Name (key)	Phone number (value)
William A. Lathan	405-709-1865
John K. Miller	402-247-8568
Hortensia E. Foster	606-481-6467
Amanda D. Newland	319-243-5613
Brooke P. Askew	307-687-2982
Create an application which solves the following problems.

What is John K. Miller's phone number?
Whose phone number is 307-687-2982? 
Do we know Chris E. Myers' phone number? */

let phoneBook:any = {
    "William A. Lathan": "405-709-1865",
    "John K.Miller": "402-247-8568",
    "Hortensia E.Foster": "606-481-6467",
    "Amanda D.Newland": "319-243-5613",
    "Brooke P.Askew": "307-687-2982",
}

console.log(phoneBook["John K.Miller"]); //his phone number
/*for (let nameOf in phoneBook) {
    if(phoneBook["307-687-2982"]){
        console.log(nameOf)
    } 
} */

// console.log(Object.keys(phoneBook["307-687-2982"]))

// console.log(phoneBook["307-687-2982"])
let areTheyIn:string = "Chris E. Myers"
if (phoneBook.hasOwnProperty(areTheyIn)==false) {
    console.log("We don't know ):")
}
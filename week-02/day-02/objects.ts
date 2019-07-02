'use strict'

export = {}

let person = {
    name: "John",
    age: 21,
    friends: [],
    greeting: function () {
        console.log('Hi my name is John ;)');
    },
    pleaseDontHateMe: {
        //object in object
        name: "Viktor",
    },
    address: "home",
}

console.log(person.greeting)

person.greeting()

if (person.hasOwnProperty("address")!== undefined){
    console.log(person.address)
}

console.log(Object.keys(person));

console.log(person["name"]);

console.log(person.hasOwnProperty("name"));

let personCopyWIthRefference = person;

let wholeNewPersonWithInitialValues = {...person}; //spread, so copy will get changed original not
wholeNewPersonWithInitialValues.name = "New new name"
person.name ="new name";
console.log(person)
console.log(personCopyWIthRefference)
console.log(wholeNewPersonWithInitialValues)

let list: string[] = [];
console.log(list.length) // Print out the number of elements in the list
list.push("William");  //add William to the list
if (list.length < 1) {  //Print out whether the list is empty or not
    console.log("empty");
} else {
    console.log("not empty");
}
list.push("John");
console.log(list);
list.push("Amanda");
console.log(list.length);
console.log(list[2]);
list.forEach(function (element) { // Iterate through the list and print out each name

    console.log(element);
})

for (let i = 0; i < list.length; i++){ // Iterate through the list and print
    console.log((i+1)+". "+list[i] );
}

list.splice(1,1); // remove 2nd element
console.log(list);

list.reverse(); // reverse order
console.log(list);

list.splice(0,list.length); // remove all element
console.log(list,list.length);
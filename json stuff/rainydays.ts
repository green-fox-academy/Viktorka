// ### Most rainy days
// ​
// Write a method which can read and parse a file containing information about
// weather in letious cities. The method must return the name of the city which
// had the most rainy days.
// ​
// #### Example
// ​
// [Example file can be found here.](./cities.csv)
// ​
// Output
// ​
// ```
// Gyor
// ```
// ### Restaurant

'use strict';
export { }
declare function require(path: string): any
const fs: any = require('fs');


let content = fs.readFileSync('cities.csv', 'UTF-8');
let rainy: string[] = []
rainy = (content.split("\r\n"));
let cities: string[] = [];
let rainyCities: string[] = [];
let counter: number = 0;
rainy.forEach(element => {
    cities.push(element.substring(11));
});

for (let i: number = 0; i < cities.length; i++) {
    if (cities[i].indexOf("RAINY") !== -1) {
        rainyCities.push(cities[i]);
    }
}
rainyCities.sort();
let demCities: string[] = [];
rainyCities.forEach(element => {
    demCities.push(element.substring(0, element.length-6));
})
console.log(demCities);
let mf:number = 1;
let m:number = 0;
let item:string;
for (let i=0; i<demCities.length; i++)
{
        for (let j=i; j<demCities.length; j++)
        {
                if (demCities[i] == demCities[j])
                 m++;
                if (mf<m)
                {
                  mf=m; 
                  item = demCities[i];
                }
        }
        m=0;
}
console.log(item);

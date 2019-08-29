const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2005 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//   companies.forEach(e =>{
//       console.log(e.name)
//   })

const overTwentyOne = ages.filter(kiscica => {
    if (kiscica >= 21) {
        return true;
    }
})
const overTwentyOne2 = ages.filter(age => age >= 21)
// console.log(overTwentyOne)
// console.log(overTwentyOne2)

const retails = companies.filter(company => company.category === 'Retail');
// console.log(retails)

const eighties = companies.filter(company => company.start >= 1980 && company.start < 1990);
// console.log(eighties)

const moreThan10 = companies.filter(company => company.end - company.start > 10);
// console.log(moreThan10);

const compNames = companies.map(company => company.name);
// console.log(compNames)

const startEndName = companies.map(company => {
    return `${company.name} [${company.start}-${company.end}]`
})
// console.log(startEndName)

const agesSquared = ages.map(age => Math.sqrt(age))
    .map(age => age * 2)
    .map(age => age * age);
// console.log(agesSquared);

// const addAll = ages.reduce(function(total,age) {
//     return total+age;
// },0)
const addAll = ages.reduce((total, age) => total + age, 0);
// console.log(addAll)

const totalYear = companies.reduce((total, company) => total
    + (company.end - company.start), 0)

console.log(totalYear)
const persons = [
  { name: "Jam Josh", age: 44, salary: 4000, currency: "USD" },
  { name: "Justina Kap", age: 34, salary: 3000, currency: "USD" },
  { name: "Chris Colt", age: 37, salary: 3700, currency: "USD" },
  { name: "Jane Doe", age: 24, salary: 4200, currency: "USD" }
];

persons.forEach(myFunction)

function myFunction(value, index, array){
    let myName = value.name;
    let myIndex = index;
    console.log(`Value: ${myName}, Index: ${myIndex}`);
    console.log(array);
}

//Adding Array values with forEach()

let totalSalaries = 0;

persons.forEach(({salary}) => {
    totalSalaries += salary;
})

console.log(totalSalaries + " USD")
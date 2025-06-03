const cars = ["BMW", "Nissan", "Toyota", "Mazda"];

let text = '';

// Arrow function to add each car to the string with commas (except after the last)
const myFunc = (value, index, array) => {
    text += value;
    if (index < array.length - 1) {
        text += ", ";
    }
}

cars.forEach(myFunc);

console.log(text);
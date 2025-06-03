// The forEach() method calls a function (callback) once for each array element

const numbers = [83, 45, 74, 28, 56, 98, 54, 30];

let text = ''; // Initialize an empty string to store the final result

// Use forEach to iterate over each element in the array
numbers.forEach(myFunc);

// Define the callback function that will run for each element
function myFunc(value, index, array) {
    text += value; // Add the current value to the string

    // Add a comma and space after the value, except for the last element
    if (index < array.length - 1) {
        text += ", ";
    }
}

console.log(text);
// First Function: Printing a welcome message
function printWelcomeMessage(firstName, lastName) {
    console.log(`Welcome ${firstName} ${lastName} to G@I College`);
}

// Second Function: Converting measurement units
function convertMeasurementUnit(value, fromUnit, toUnit) {
    switch (fromUnit.toLowerCase()) {
        case 'celsius':
            if (toUnit.toLowerCase() === 'fahrenheit') {
                return (value * 9/5) + 32;
            }
            break;
        case 'fahrenheit':
            if (toUnit.toLowerCase() === 'celsius') {
                return (value - 32) * 5/9;
            }
            break;
        // Add more conversion cases as needed
        default:
            console.log('Invalid conversion');
            break;
    }
}

// Third Function: Performing math operations
function mathOperation(...args) {
    // Example of a math operation, like factorial
    // More operations can be added as needed
    return args.reduce((acc, val) => acc * val, 1);
}

// Fourth Function: Advanced function (for example purposes, let's say it reverses a string)
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Exporting functions for use in other files
module.exports = {
    printWelcomeMessage,
    convertMeasurementUnit,
    mathOperation,
    reverseString // Exporting the fourth function as well
};
// Importing the other JavaScript file that contains the functions
const utilities = require('./utilities');

// Calling/invoke a list of functions from the second JavaScript file
utilities.printWelcomeMessage('MOHAMMAD AAVEZ', 'SANGHARIYT');
console.log(utilities.convertMeasurementUnit(30, 'Celsius', 'Fahrenheit'));
console.log(utilities.mathOperation(5, 3, utilities.multiply)); // Example of using mathOperation to multiply numbers
console.log(utilities.reverseString('Hello World')); // Example of using the advanced function
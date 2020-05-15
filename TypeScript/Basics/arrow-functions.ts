// Functions in JS
// Option 1
function logger_1(message) {
    console.log(message);
}
// Option 2
let logger_2 = function (message) {
    console.log(message);
}

// Arrow Functions
// Variant 1
let myLoggerFunc = (message) => {
    console.log(message);
}

// Variant 2 - If there is a single line inside the function.
let myAltLoggerFunc = (message) => console.log(message);

// Variant 3 - If there is a single param, optionally we can reove the parenthesis around param
// NOTE: This might give an impression of less readable code
let myAltFunc = message => console.log(message);

// Variant 4 - If there are not params
let noParamFunc = () => console.log("No param is fun!");


var isSunny = true;
var temperature = 45; // let's assume degrees Fahrenheit
var isRaining = false;
var whatToBring = "I should bring: ";

// New Keyword alert! If starts a conditional statement. 
// Followed by a set of parentheses
//  In the parens, place a boolean expression
// After closing paren, curly braces at the bookends of the code block

if(isSunny) {
    // whatToBring = whatToBring + "sunglasses, ";
    whatToBring += "sunglasses, ";
}
if(temperature < 50) {
    whatToBring += "a coat, ";
}
if(isRaining) {
    whatToBring += "an umbrella, ";
}
whatToBring += "and a smile!";
    
console.log(whatToBring);


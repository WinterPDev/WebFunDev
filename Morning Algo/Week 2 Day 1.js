// var floor = Math.floor(1.8);
// var ceiling = Math.ceil( Math.PI );
// var random = Math.random();
    
// console.log(floor);
// console.log(ceiling);
// console.log(random);


function diceroller(min, max) {
    // Math.Random goes 0 to 1 giving you the %
    // 0 - 100% * (6 - 1) + 1
    // Range of 6 -> * 6 by the random number. If below min + min
    // If result is below min, min is added to make it min decimal
    return Math.round(Math.random() * (max - min) + min);
    //                  1% - 99% * 5 + 1
}

for (let i = 0; i <= 100; i++){
console.log(diceroller(1,6))
};





// var lifesAnswers = [
//     "It is certain.",
//     "It is decidedly so.",
//     "Without a doubt.",
//     "Yes – definitely.",
//     "You may rely on it.",
//     "As I see it, yes.",
//     "Most likely.",
//     "Outlook good.",
//     "Yes.",
//     "Signs point to yes.",
//     "Reply hazy, try again.",
//     "Ask again later.",
//     "Better not tell you now.",
//     "Cannot predict now.",
//     "Concentrate and ask again.",
//     "Don't count on it.",
//     "My reply is no.",
//     "My sources say no.",
//     "Outlook not so good.",
//     "Very doubtful."
// ]

// function fortuneteller(arr){
//     var min = 0;
//     var max = arr.length - 1;
//     var output = Math.round(Math.random() * (max - min) + min);
//     // 0% - 100% * 6
//     console.log(arr[output]);
// };

// fortuneteller(lifesAnswers)
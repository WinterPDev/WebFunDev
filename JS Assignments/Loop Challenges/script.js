console.log("Starting Find Odd Num. . . . ")

function findoddnum(end){
    for(var oddnum = 1; oddnum <= end; oddnum++) {
        if(oddnum % 2 == 0) {
        } else {
                console.log(oddnum);
            }
        }
    };

findoddnum(20);

console.log("Completed Find Odd Num!");
console.log("Starting Find Multiples of 3. . . . ")


function findmultiplesof3(end){
    for(end > 0; end--;) {
        if(end % 3 == 0) {
            console.log(end)
        }
        }
    };

findmultiplesof3(100);

console.log("Completed Find Multiples of 3!");
console.log("Starting Print Sequence. . .")

function printsequence(){
    for(var i = 4; i > -4; i-=0.5) {
        if(i == 4) {
            console.log(i);
        } else if(i == 2.5) {
            console.log(i);
        } else if(i == 1) {
            console.log(i);
        } else if(i == -0.5) {
            console.log(i);
        } else if(i == -2) {
            console.log(i);
        } else if(i == -3.5) {
            console.log(i);
        }
    }
};

printsequence();


console.log("Completed Print Sequence!");

console.log("Starting Sigma. . . . ");
var sum = 0
var result = ""

function Sigma(end){
    for( var i = 1; i <= end; i++) {
        if(i == end) {
            sum += i;
            result += i;
        } else {            
        sum += i;
        result += (i + " + ");
        }
    }
    return {result, sum};
};

console.log(Sigma(100));

console.log("Completed Sigma!");

console.log("Starting Factorio. . . . ");

var product = 1
var result = ""
function factorio(end){
    for(var i = 1; i <= end; i++) {
        if(i == end) {
            product *= i;
            result += i; 
        } else {
        product *= i;
        result += (i + " * ");
        }
    }
    return {result, product};
};

console.log(factorio(12));

console.log("Completed Factorio!")
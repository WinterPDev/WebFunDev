var x = 5;
    
function setX(newValue) {
    x = newValue; 
}
    
console.log(x);

// -> 5

setX(15);

// -> 15

console.log(x);


//-------------------------------


var x = 5;
    
function addToX(amount) {
    return x + amount;
    console.log("hello there");
}
    
console.log(x);
var result = addToX(-10);
console.log(result);
console.log(x);


//--------------

function isPal(arr) {
    for(var left=0; left<arr.length/2; left++) {
        // 0 < 5/2 = 2.5
        // left=1 1< 5/2 = 2.5
        var right = arr.length-1-left;
        // 5-1-0 = 4
        // 5-1-1 = 3
        if(arr[left] != arr[right]) {
        // [0] != [5] (1 == 1)
        // [1] != [2] ()
        // Not a palindrome!
            return "Not a pal-indrome!";
        }
    }
    return "Pal-indrome!";
}
    
var result1 = isPal( [1, 1, 2, 2, 1] );
console.log(result1);
    
var result2 = isPal( [3, 2, 1, 1, 2, 3] );
console.log(result2);



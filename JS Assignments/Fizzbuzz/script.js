function fizzbuzz(end){
    for(var i=1; i <= end; i++) {
        if((i % 3 == 0) && (i % 5 == 0)) {
            console.log("Fizzbuzz");
        } else if(i % 3 == 0) {
            console.log("Fizz");
        } else if(i % 5 == 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
};

fizzbuzz(100);

// function fizz(){
//     for(var m=1;m<101;m++);{
//         if (m % 3 == 0) {
//         console.log("fizz");
//         }
//     }
// }
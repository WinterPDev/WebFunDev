// var start = 0;
// var end = 12;
    
// while(start < end) {
//     console.log("start: " + start + ", end: " + end);
//     start += 2;
//     end -= 2;
// }

// While loop -> Good for any number of times to go and stop. 

arr = ["a", "b", "c", "d", "e"];

for(var i=0; i<arr.length/2; i++ ){
    var j = arr.length - 1 - i;
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    console.log(arr);
}

console.log(arr);

// var arr1 = ["a","b","c","d","e"]

// temp= arr1

// arr1[0] -> temp[5]
// arr1[1] -> temp[4]

// //  Goal: ["e","d","c","b","a"]


// function uno(x) {
//     x=arr1
//     console.log(arr1)
// }   

// uno(arr1)

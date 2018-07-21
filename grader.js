//In the file define a new function named "average"

function average(arr){
    var total = 0;
        for(var i = 0; i < arr.length; i++) {
        total += arr[i];
        }
    var avg = total / arr.length;
    return Math.round(avg);
}
//It should return the average score in the array, rounded to the nearest whole number

console.log("Average score science test");
var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores)); //should return 94

console.log("Average score english test");
var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores2)); //should return 68

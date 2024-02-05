// Take four parameters. Multiply the four numbers and then return the result 

// function multiply(num1,num2,num3,num4){
// const multiply = num1*num2*num3*num4
// console.log(multiply);
// }
// multiply(2,3,4,5)

// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
// function oddEven(number){
//     if(number%2===1){
//         console.log(number*2);
//     }else{
//         console.log(number/2);
//     }
// }
// const number = 79;
// const result = oddEven(number)
// console.log(result);

// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(arrays){
    let sum = 0;
    for(const number of arrays){
        console.log(number.length); 
    }
}
const arrays = [2,4,3,5,6,8,32,45,67]
const result = make_avg(arrays)
console.log(result);
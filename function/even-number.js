// function evenNumbersOnly(numbers){
//     const evens=[]
//     for(const number of numbers){
//         if(number%2===0){
//             evens.push(number)
//         }
//     }
//     return evens;
// }

// const numbers = [34,54,78,23,68,98,56,67]
// const evenNumber=evenNumbersOnly(numbers)
// console.log("Even Numbers are :",evenNumber);

function sumOfEven(numbers){
    let sum = 0;
    for(const number of numbers){
        if(number%2===0){
            console.log(number);
            sum = sum+number
        }
    }
    return sum
}

const numbers = [34,54,78,23,68,98,56,67]
const sumEven = sumOfEven(numbers)
console.log("-------------");
console.log(sumEven);
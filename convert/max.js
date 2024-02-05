// let num1=79;
// let num2=45;
// if(num1>num2){
//     console.log("Max Number is :",num1);
// }else{
//     console.log("Max Number is :",num2);
// }
// function getMax(num1,num2){
//     if(num1>num2){
//         return num1
//     }else{
//         return num2
//     }
// }
// const max = getMax(89,99)
// console.log("Max number is : ",max);

// function maxFrom3(num1,num2,num3){
//     if(num1>num2 && num1>num3){
//         return num1;
//     }else if(num2>num1 && num2>num3){
//         return num2;
//     }else{
//         return num3;
//     }
// }
// const max = maxFrom3(120,90,60)
// console.log("The Max Number is :",max);

// const max = Math.max(24,25,22,65,76,87,48,56)
// console.log("The Max Number is : ",max);


//Max Number
// const height = [67,78,54,54,989,89,56,69]

// function getMax(height){
//     let max = height[0]
//     for (const num of height){
//         if(num>max){
//             max=num
//         }
//     }
//     return max
// }
// const result = getMax(height)
// console.log(result);


//Min Number
const height = [67,78,42,54,54,989,89,56,69]

function getMin(height){
    let min = height[0]
    for (const num of height){
        if(num<min){
            min=num
        }
    }
    return min;
}
const result = getMin(height)
console.log(result);
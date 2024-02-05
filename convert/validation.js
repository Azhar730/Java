// function multiply(num1,num2){
//     if(typeof num1!=='number' || num2!=='number'){
//         return "Please Provide a Valid Number"
//     }
//     const mul =num1*num2
//     return mul;
// }
// const result = multiply('seven','Ten')
// console.log(result);

function fullName(first,last){
    if(typeof first !== 'string' || typeof last !== 'string'){
        return "Please give valid information"
    }
    const full = first + ' '+ last
    return full
}
const first = 23
const last = "Mahmud"
const result = fullName(first,last)
console.log(result);
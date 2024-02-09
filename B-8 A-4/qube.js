// //FindOut qub number
// function qubNumber(number){
//     if(typeof number !=="number"){
//         return "Please input valid data"
//     }
//     const result = Math.pow(number,3)
//     return result;
// }
// const number = 3;
// const result = qubNumber(number)
// console.log(result);


//FindOut Duplicate Number and return true or false
function findDuplicate(string1,string2){
    const find = string1.includes(string2)
    return find;
}
const result = findDuplicate("Java Script","cri")
console.log(result);
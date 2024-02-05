// function leapYear(year){
//     if(year%4===0){
//         return true;
//     }else{
//         return false;
//     }
// }
// const year= 2025
// const result = leapYear(year)
// console.log(result);

function leapYear(year){
    if(year%100!==0 && year%4===0){
        return true;
    }
    else if(year%100===0 && year%400){
        return true;
    }
    else{
        return false;
    }
}
const year= 1956
const result = leapYear(year)
console.log(result);
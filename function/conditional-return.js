// function isEven(number){
//     if(number%2===0){
//         return true;
//     }else{
//         return false;
//     }
// }
// const var1= isEven(98)
// const var2= isEven(99)
// console.log(var1);
// console.log(var2);

//is ODD
// function isOdd(number){
//     if (number%2===1){
//         return true;
//     }return false;
// }
// console.log(isOdd(10));
// console.log(isOdd(7));

// function evenSizedString(str){
//     const size = str.length
//     console.log(str,size);
//     if(size%2===0){
//         console.log("Even Size");
//     }
//     else{
//         console.log("Odd size");
//     }
// }
// evenSizedString("London")
// console.log("------------");
// evenSizedString("Dhaka")

function doDoubleOrTriple(number,doDouble){
    if (doDouble===true){
        const result = number*2
        return result
    }
    else{
        const result = number*3
        return result
    }
}
const var1 = doDoubleOrTriple(5,true)
const var2 = doDoubleOrTriple(5,false)
console.log(var1);
console.log(var2);
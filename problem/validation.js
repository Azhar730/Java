// function validation(x,y){
//     console.log(typeof(x),typeof(y));
//     if(typeof x !=='number'&& y !=='number'){
//         return 'Thik Thak Number De'
//     }
    
//     const z = x+y
//     return z
// }
// const result= validation(5,true)
// console.log(result);

function checkValidation(obj){
    if (typeof obj !=='object'){
        return 'Input should be an object'
    }else if(!obj.Name|| !obj.Age){
        return 'Name & Age must Should be an Object'
    }else if(typeof obj.Name !=='string'){
        return 'Name type should be an string'
    }else if(typeof obj.Age !=='number'){
        return 'Age type should be number formate'
    }else if(obj.Age<=0){
        return 'Age should be a positive number'
    }
    else if(typeof obj.isStudent !== 'boolean'){
        return 'isStudent! Type should be Boolean value'
    }
    const x= `My Name is :${obj.Name}. my age is ${obj.Age}. and my Studentship is ${obj.isStudent}`
    return x;
}
const obj = {Name: "Azhar Mahmud", Age:-24,isStudent:true}
const result = checkValidation(obj)
console.log(result);
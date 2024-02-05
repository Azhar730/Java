function add(a,b){
    const sum = a+b
    return sum;
}
function sub(a,b){
    const sub = a-b;
    return sub;
}
function multiply(a,b){
    const mul = a*b;
    return mul;
}
function divide(a,b){
    const divide = a/b
    return divide;
}

function calculator (a,b,operations){
    if(operations==="add"){
        const result = add(a,b)
        return result;
    }
    else if(operations==="sub"){
        const result= sub(a,b)
        return result;
    }
    else if(operations==="mul"){
        const result = multiply(a,b)
        return result;
    }
    else{
        const result = divide(a,b)
        return result;
    }
}
const result = calculator(10,70,"mul")
console.log(result);
function stringSum(numbers){
    let sum=0
    for(const number of numbers){
        console.log(number);
        sum=sum+number
    }
    return sum;
}
const string =[24,43,26,56,67,78]
const total= stringSum(string)
console.log("-------------------------");
console.log("Sum of Total Number :",total);
function oddAvg(numbers){
    const odds=[]
    for(const number of numbers){
        if(number%2===1){
            odds.push(number)
        }
    }
    console.log(odds);
    let sum = 0;
    for(const number of odds){
        sum=sum+number
    }
    const count = odds.length
    console.log(sum,count);
    const avg = sum/count
    return avg;
}
const numbers=[34,43,9,46,67,58,33,68,37,105]
const result =oddAvg(numbers)
console.log(result);
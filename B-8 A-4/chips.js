function canPay(array,price){
    sum=0;
    for(const item of array){
        sum=sum+item
    }
    if(price===sum){
        return true;
    }else{
        return false;
    }
}
const array = [3,2,5]
const price = 11
const result = canPay(array,price)
console.log(result);
// const arr = ["Apple","Mango","Banana","Guava","Orange"];

// // //Reverse style
// // for (let i = arr.length-1; i>=0; i--){
// //     console.log(arr[i]);
// // }

let num = [20,40,57,67,60,46,57]
sumOfOdd = 0;
sumOfEven = 0;
for (let i=0; i<num.length;i++){
    const x = num[i]
    if(i%2==0){
        sumOfEven+=x
    }else{
        sumOfOdd+=x
    }
}
console.log(sumOfEven);
console.log(sumOfOdd);

// let sum = 0
// for(let i = 10; i>=2; i=i-2){
//     console.log(i);
//     sum = sum+i;
// }
// console.log("Total = "+sum)

// let sum = 0
// for(let i = 1; i<=30; i++){
//     if(i % 3===0 || i % 5 ===0){
//         console.log(i);
//     }
//     sum = sum+i;
// }
// console.log("Total = "+sum)
// for (let i = 0; i < 5; i+=3) {
//     console.log(i);
//   }
let sum = 0
for (let i = 1; i<=30; i++){
    if(i%3===0 || i%5===0){
        console.log(i);
        sum = sum+i
    }
    
}
console.log("Total = "+sum);
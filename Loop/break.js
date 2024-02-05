// for (let i=1; i<=20; i++){
//     console.log(i)
//     if(i>=5){
//         break;
//     }
    
// }
// console.log("End")

// let n = 54;
// while(n>=20){
    
//     n--;
    
//     if(n%5===0){
//         continue;
//     }
//     console.log(n);
// }

//Break
const num = [10,20,30,35,40,45,50,55,60,65,70,80,90]
// for (let i of num){
//     console.log(i);
//     if(i===50){
//         break;
//     }
// }
//Continue
// for (let i of num){
//     if(i===30){
//         continue;
//     }
//     console.log(i);
// }
for (let i of num){
    if(i%2==0){
        continue;
    }
    console.log(i);
}
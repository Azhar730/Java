// var age = 16;
// age>18?console.log("Vot Dio"): console.log("Barite Bose Ghumao Babu");
let price = 1500;
const isLeader = true;

// if(isLeader===true){
//     price= price*50/100;
// }
// else{
//     price = price + 100;
// }
// console.log(price)

// price = isLeader===true? price=price*50/100:price=price+100;
// console.log(price);

// if(isLeader===true){
//     if(price>1000){
//         price=price/2;
//     }
//     else{
//         price=0;
//     }
// }
// else{
//     price=price+(price*50/100);
// }
// console.log(price);

price= isLeader===true? price>1000? price/2:0: price+100
console.log(price);
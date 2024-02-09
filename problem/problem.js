// function oddEven(number){
//     if(number%2===0){
//         return "Even"
//     }else{return "Odd"}
// }
// const number = 54689
// const result = oddEven(number)
// console.log(result);

// function printName(x){
//     for (let i=1; i<=x; i++){
//         console.log("Azhar Mahmud");
//     }
// }
// printName(10)

//Ana To Tola
// function anaToVori(ana){
//     const vori = ana*0.0625
//     return vori;
// }
// const ana = 57
// const result = parseInt(anaToVori(ana))
// console.log(result);

//pandaCost 
// function pandaCost(singara,samucha,jilapi){
//     if(typeof singara !== 'number' || typeof samucha !== 'number' || typeof jilapi !=='number'){
//         return 'food quantity should be number'
//     }else if(singara<0 || samucha<0 || jilapi<0){
//         return "food quantity should be positive number"
//     }
//     else{
//         const singaraPrice=7
//         const samuchaPrice=10
//         const jilapiPrice=15

//         const totalCost = (singara*singaraPrice)+(samucha*samuchaPrice)+(jilapi*jilapiPrice)
//         return totalCost
//     }
// }
// const singara = 1
// const samucha = 2
// const jilapi = 1

// const result = pandaCost(singara,samucha,jilapi)
// console.log(result);

//Picnic cost
function picnicCost(participents){
    let first100Cost = 0
    let second101To200Cost = 0
    let above200Cost = 0
    let totalCost = 0

    if(participents<=100){
        first100Cost = participents*5000
        return first100Cost
    }
    else if(participents<=200){
        first100Cost = 100*5000
        second101To200Cost = (participents-100)*4000
        total = first100Cost+second101To200Cost
        return total;
    }else{
        first100Cost = 100*5000
        second101To200Cost = 100*4000
        above200Cost = (participents-200)*3000
        total = first100Cost+second101To200Cost+above200Cost
        return total;
    }
}
const participents = 201
const result = picnicCost(participents)
console.log(result);
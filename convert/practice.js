// const heights = [167, 190, 120, 165, 137];

// function getMin(heights){
//     let min=heights[0]
//     for(const num of heights){
//         if(num<min){
//             min=num;
//         }
//     }
//     return min;
// }
// const result = getMin(heights)
// console.log(result);

//Task-2
//Find the friend with the smallest name
// friends = ['rahim', 'robin', 'rafi', 'ron', 'rashed']

// function getMin(friends){
//     let min = friends[0].length
//     for(const list of friends){
//         if(list.length<min){
//             min=list.length
//         }
//     }
//     return min;
// }
// const result = getMin(friends)
// console.log(result);

//Task-3
const products = [
    {Name: "Laptop", Price: 35000, Quantity:2},
    {Name: "Tablets", Price: 15000, Quantity:1},
    {Name: "Mobile", Price: 20000, Quantity:1}
]

function calculateElectronicsBudget(products){
    let sum = 0;
    for (const item of products){
        const productCost = item.Price*item.Quantity
        sum = sum+productCost
    }
    return sum;
}
const result=calculateElectronicsBudget(products)
console.log(result);
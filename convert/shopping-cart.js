const products= [
    {Name:"Shampoo", Price: 300, quantity: 2},
    {Name:"Shirt", Price: 700, quantity: 2},
    {Name:"Pant", Price: 1300, quantity: },
    {Name:"T-Shirt", Price: 1800,  quantity: 1},
    {Name:"Jangiya", Price: 100, quantity: 1}
]

function getTotal(products){
    let sum =0
    for(const item of products){
        const productCost = item.Price*item.quantity
        sum = sum+productCost
    }
    return sum;
}

const Total = getTotal(products);
console.log("The Total Price is : ",Total);
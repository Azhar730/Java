const products= [
    {Name:"Shampoo", Price: 300},
    {Name:"Shirt", Price: 700},
    {Name:"Pant", Price: 1300},
    {Name:"T-Shirt", Price: 1800},
    {Name:"Jangiya", Price: 100}
]

function getTotal(products){
    let sum =0
    for(const item of products){
        sum = sum+item.Price
    }
    return sum
}

const Total = getTotal(products);
console.log("The Total Price is : ",Total);
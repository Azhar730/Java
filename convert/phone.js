const phones = [
    {Name:"Xiaomi", price: 20000,color:"Black",camera: "12mp"},
    {Name:"iPhone", price: 120000,color:"Black",camera: "12mp"},
    {Name:"Nokia", price: 18000,color:"Black",camera: "12mp"},
    {Name:"Apple", price: 25000,color:"Black",camera: "12mp"},
    {Name:"iTel", price: 8650,color:"Black",camera: "12mp"},
    {Name:"Samsung", price: 27000,color:"Black",camera: "12mp"},
]

function getMax(phones){
    let max = phones[0]
    for (const item of phones){
        if(max.price<item.price){
            max=item;
        }
    }
    return max;
}

const result = getMax(phones)
console.log("The Maximum Prices Phone is : ",result);
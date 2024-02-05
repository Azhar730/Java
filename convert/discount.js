// function discountPrice(quantity){
//     if (quantity<=100){
//         total = quantity*100
//         return total
//     }
//     else if(quantity<=200){
//         total = quantity*90
//         return total
//     }
//     else{
//         total = quantity*70
//         return total;
//     }
// }
// const quantity = 201
// const result = discountPrice(quantity)
// console.log(result);


//Layered Discount Calculations
// function layeredDiscountedTotal (quantity){
//     const first100Price = 100;
//     const second100Price = 90;
//     const above200Price = 70;

//     if(quantity<=100){
//         const total=quantity*first100Price
//         return total;
//     }
//     else if(quantity<=200){
//         const first100Total = 100*first100Price
//         const remainingQuantity =quantity-100
//         const remainingTotal = remainingQuantity*second100Price
//         const total = first100Total+remainingTotal
//         return total;
//     }
//     else{
//         const first100Total = 100*first100Price
//         const second100Total = 100*second100Price
//         const remainingQuantity = quantity-200
//         const remainingTotal= remainingQuantity*above200Price
//         const total = first100Total+second100Total+remainingTotal
//         return total;
//     }
// }
// const quantity = 280;
// const result = layeredDiscountedTotal(quantity)
// console.log(result);

function layeredDiscountedTotal(quantity){
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;

    if(quantity<=100){
        const total = quantity*first100Price
        return total;
    }
    else if (quantity<=200){
        const first100Total = 100*first100Price
        const remainingQuantity = quantity-100
        const remainingTotal = remainingQuantity*second100Price
        const total = first100Total+remainingTotal
        return total;
    }
    else {
        const first100Total = 100*first100Price
        const second100Total = 100*second100Price
        const remainingQuantity = quantity-200
        const remainingTotal = remainingQuantity*above200Price
        const total = first100Total+second100Total+remainingTotal
        return total;
    }
}
const quantity = 201;
const result = layeredDiscountedTotal(quantity)
console.log(result);
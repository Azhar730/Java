function woodQuantity(tableQuantity,chairQuantity,bedQuantity){
    const perTableWood=3
    const perCharWood=2
    const perBedWood=7

    const tableTotalWood = perTableWood*tableQuantity
    const chairTotalWood = perCharWood*chairQuantity
    const bedTotalWood = perBedWood*bedQuantity

    const totalWood = tableTotalWood+chairTotalWood+bedTotalWood
    return totalWood;
}
const result = woodQuantity(2,0,0)
console.log("Wood Needed : ",result);
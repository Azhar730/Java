const number = [4,6,5,49,2,33,46,7,9,8,45,]
// const sort = number.sort()
// console.log(sort);
const asc = [...number].sort(function (a,b) {return a-b})
const dsc = [...number].sort(function (a,b) {return b-a})
console.log(asc);
console.log(dsc);
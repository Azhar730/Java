const numbers = [1,2,3,4,5,6,7,8]

//System-1
// const reversed = numbers.reverse();
// console.log(reversed);

//System-2
// const rev_number=[]
// for (num of numbers){
//     rev_number.unshift(num)
// }
// console.log(rev_number);

//System-3
// const rev_number=[]
// for (let i = 0; i<numbers.length; i++){
//     const x= numbers[i]
//     rev_number.unshift(x)
// }
// console.log(rev_number);

//System-4
const rev_rev_numbers=[]
for (let i=numbers.length-1; i>=0;i--){
    const x = numbers[i]
    rev_rev_numbers.push(x)
}
console.log(rev_rev_numbers);
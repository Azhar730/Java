function findLargest(array){
    if(!Array.isArray(array)){
        return 'Please provide an array'
    }else{
        let max = array[0]
        for (let i=1; i<array.length;i++){
            if (typeof array[i]!=='number'){
                return 'array item should be only number'
            }else{
                if(array[i]>max){
                    max=array[i]
                }
            }
        }return max  
    }
}
const array = [54,true,54,67,67]//['Azhar','Nadim','Akib','Rayhan','fhghhjkghfujhufg','Sakib','Aryan']{name: "Azhar",age: 23} 
const result = findLargest(array)
console.log(result);
//---------------------------------------------------------------------------------------------------------------------------------------------------
// function findLargest(array){
//     if(!Array.isArray(array)){
//         return 'Please provide an array'
//     }else{
//         let max = array[0]
//         for (let i=1; i<array.length;i++){
//             if (typeof array[i]!=='number'){
                
//                 // return 'array item should be only number'
//             }else{
//                 if(array[i]>max){
//                     max=array[i]
//                 }
//             }
//         }return max  
//     }
// }
// const array = [54,true,54,67,67]//['Azhar','Nadim','Akib','Rayhan','fhghhjkghfujhufg','Sakib','Aryan']{name: "Azhar",age: 23} 
// const result = findLargest(array)
// console.log(result);

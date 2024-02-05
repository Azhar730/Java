function removeDuplicate(arrays){
    const unique = []
    for (const item of arrays){
        if(unique.includes(item)===false){
            unique.push(item)
        }
    }return unique;
}
const arrays=['Abul','Babul','Abul','Kabul','Sabul','Babul','Sabul']
const result = removeDuplicate(arrays)
console.log(result);
console.log("-----------------------------------");
console.log(Math.round(2.49));
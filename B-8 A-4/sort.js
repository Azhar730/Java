function sortMaker(array){
    const a= array[0]
    const b = array[1]
    if(a<0 || b<0){
        return 'Invalid Input'
    }
    else if(a===b){
        return 'equal'
    }
    else if(a>b){
        return [a,b]
    }else{
        return [b,a]
    }
}
const array = [9,9]
const result = sortMaker(array)
console.log(result);
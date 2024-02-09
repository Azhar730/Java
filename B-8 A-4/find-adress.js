function findAddress(obj){
    const street = obj.street || '__'
    const house = obj.house || '__'
    const society = obj.society || '__'

    const str = street+","+house+","+society
    return str
}
const obj = {street:10}
const result = findAddress(obj)
console.log(result);
//, house: "15A",society:"Earth Perfect"
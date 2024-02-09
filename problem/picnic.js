function picnicCost(participents){
    if(typeof participents !=='number' || participents < 0){
        return "please input valid number"
    }else{
        let first100Cost = 0
        let second101To200Cost = 0
        let above200Cost = 0
        let totalCost = 0

        if(participents<=100){
            first100Cost = participents*5000
            return first100Cost;
        }
        else if(participents<=200){
            first100Cost = 100*5000
            second101To200Cost = (participents-100)*4000
            totalCost = first100Cost+second101To200Cost
            return totalCost;
        }
        else{
            first100Cost = 100*5000
            second101To200Cost = 100*4000
            above200Cost = (participents-200)*3000
            totalCost = first100Cost+second101To200Cost+above200Cost
            return totalCost;
        }
    }
}
const participents = 201
const result = picnicCost(participents)
console.log(result);
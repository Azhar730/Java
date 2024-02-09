function calculateMoney(ticketSale){
    if(ticketSale<0){
        return 'Invalid Number'
    }else{
        let perTicketPrice = 120
        let guardRate= 500
        let stuffLaunchCost = 8*50

        totalCost = (ticketSale*perTicketPrice)-(guardRate+stuffLaunchCost)
        return totalCost
    }
}

function checkName(name) {
    if(typeof name !=='string'){
        return 'Invalid'
    }
    let small=name.toLowerCase()
    if(small.charAt(small.length-1)==="a"){
        return 'Good Name'
    }else if(small.charAt(small.length-1)==="y"){
        return 'Good Name'
    }else if(small.charAt(small.length-1)==="i"){
        return 'Good Name'
    }else if(small.charAt(small.length-1)==="e"){
        return 'Good Name'
    }else if(small.charAt(small.length-1)==="o"){
        return 'Good Name'
    }else if(small.charAt(small.length-1)==="u"){
        return 'Good Name'
    }else if(small.charAt(small.length-1)==="w"){
        return 'Good Name'
    }else{
        return 'Bad Name'
    }
}

function deleteInvalids(array) {
    if(!Array.isArray(array)){
        return "Invalid Array"
    }
    let newArray=[]
    for(let i=0; i<array.length;i++){
        const value = array[i]
        if(typeof value !=='boolean' && typeof value !=='object' && typeof value !=='string' && typeof value !=='undefined' && typeof value !=='null' && !Array.isArray(value) && !isNaN(value)){
            newArray.push(value)
        }
    }
    return newArray;
}

function password(obj) {
    if(!obj.name || !obj.birthYear || !obj.siteName){
        return 'invalid'
    }else if(obj.birthYear.toString().length !==4){
        return 'invalid'
    }
    concat = obj.siteName.charAt(0).toUpperCase()+obj.siteName.slice(1) + "#" + obj.name + "@" + obj.birthYear
    return concat;
}

function monthlySavings(arr , livingCost) {
    if(!Array.isArray(arr) && typeof livingCost !=='number'){
        return 'invalid input'
    }
    let firstSalary = arr[0]
    let secondSalary = arr[1]
    let thirdSalary = arr[2]
    let totalIncome = firstSalary+secondSalary+thirdSalary
    
    if(firstSalary >=3000){
        bankTax= (firstSalary*20)/100
    }else if(secondSalary >=3000){
        bankTax= (secondSalary*20)/100
    }else if(thirdSalary >=3000){
        bankTax = (thirdSalary*20)/100
    }else if(firstSalary<3000){
        bankTax=(firstSalary*0)/100
    }else if(secondSalary<3000){
        bankTax=(secondSalary*0)/100
    }else{
        bankTax=(thirdSalary*0)/100
    }

    let TaxLivingCost=bankTax+livingCost

    let savings = totalIncome-TaxLivingCost
    if(savings<0){
        return "earn more"
    }
    return savings
}
function calculatePentagonArea(){
    const perimeter = getInputValueById('perimeter')
    const apothem = getInputValueById('apothem')

    const area = 0.5 * perimeter * apothem
    setElementById('display-pentagon',area)
}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId)
    const inputFieldValue = inputField.value;
    const result = parseFloat(inputFieldValue)
    return result;
}

function setElementById (elementId, area){
    const element = document.getElementById(elementId)
    element.innerText= area
}
function calculateEllipseArea(){
    const base = getInputValueById('ellipse-base');
    const height = getInputValueById('ellipse-height');
    
    const area = 3.1416 * base * height;
    setElementById('display-ellipse', area);

}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValue = inputField.value;
    const result = parseFloat(inputFieldValue);
    return result;
}

function setElementById (elementId, area){
    const element = document.getElementById(elementId);
    element.innerText= area;
}
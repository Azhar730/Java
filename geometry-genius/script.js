function calculateTriangleArea(){
    const triangleBase= document.getElementById('triangle-base')
    const triangleBaseValue= triangleBase.value
    const base = parseFloat(triangleBaseValue)
    
    const triangleHeight = document.getElementById('triangle-height')
    const triangleHeightValue = triangleHeight.value
    const height = parseFloat(triangleBaseValue)

    const triangleArea = 0.5*base*height

    const displayValue= document.getElementById('display-value')
    displayValue.innerText= triangleArea
}

function rectangleAreaCalculate(){
    const rectangleWidth = document.getElementById('rectangle-width')
    const rectangleWidthValue = rectangleWidth.value;
    const width = parseFloat(rectangleWidthValue)

    const rectangleHeight = document.getElementById('rectangle-height')
    const rectangleHeightValue = rectangleHeight.value;
    const height = parseFloat(rectangleHeightValue)

    const rectangleArea = width*height

    const displayResult = document.getElementById('display-result')
    displayResult.innerText = rectangleArea
}
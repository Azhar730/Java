// function hideElementById (elementId){
//     const element = document.getElementById(elementId)
//     element.classList.add('hidden')
// }
// function showElementById(elementId){
//     const element = document.getElementById(elementId)
//     element.classList.remove('hidden')
// }

// function getRandomAlphabet(){
//     const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
//     const alphabet = alphabetString.split('')
//     //get a random number
//     const randomNumber = Math.random()*25
//     const index = Math.round(randomNumber)
    
//     const alphabets = alphabet[index]
//     return alphabets;
// }
// function setBackgroundColorById(elementId){
//     const element = document.getElementById(elementId)
//     element.classList.add('bg-orange-500');
// }

function play(){
    //hide everything show only the playground
    hideElementById('home-screen')
    hideElementById('final-stage')
    showElementById('play-ground')
    //reset score & life
    setTextElementValueById('current-life',5)
    setTextElementValueById('current-score',0)
    continueGame()
}

function hideElementById(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('hidden')
}

function showElementById(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('hidden')
}

function getRandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
    const alphabet = alphabetString.split('')

    const randomNumber = Math.random()*25
    const random = Math.round(randomNumber)

    const alphabets = alphabet[random]
    return alphabets;
}
function continueGame(){
    const index = getRandomAlphabet()
    const currentAlphabet = document.getElementById('current-alphabet')
    currentAlphabet.innerText = index

    setBackgroundColorById(index)
}
function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('bg-orange-400')
}
function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('bg-orange-400')
}
document.addEventListener('keyup', handleKeyboardKeyUpEvent)

function handleKeyboardKeyUpEvent(event){
    const playerPress = event.key
    const currentAlphabet = document.getElementById('current-alphabet')
    const alphabetText = currentAlphabet.innerText
    const expectedAlphabet = alphabetText.toLowerCase()
    
    if(playerPress === expectedAlphabet){
        const currentScore = getTextElementValueById('current-score')
        const newScore = currentScore+1
        setTextElementValueById('current-score',newScore)
        //Get the current Score
        // const currentScoreString = document.getElementById('current-score')
        // const currentScoreText = currentScoreString.innerText
        // const currentScore = parseInt(currentScoreText)
        //increase the new score by 1
        // const newScore = currentScore + 1;
        //show the updated score
        // currentScoreString.innerText=newScore;
        //start a new round
        removeBackgroundColorById(expectedAlphabet)
        continueGame()
    }else{
        const currentLife = getTextElementValueById('current-life')
        const newLife = currentLife-1
        setTextElementValueById('current-life',newLife)
        if (newLife === 0){
            gameOver()
        }
        // console.log('You Lose Your Life');
        // //step-1: get the current life number
        // // const currentLifeString = document.getElementById('current-life')
        // // const currentLifeText = currentLifeString.innerText
        // // const currentLife = parseInt(currentLifeText)
        // //step-2: reduce the life count
        // const newLife = currentLife-1
        // //step-3: display the update life count
        // currentLifeString.innerText = newLife;
    }
}

function getTextElementValueById(elementId){
    const element = document.getElementById(elementId)
    const elementText = element.innerText
    const elementValue = parseInt(elementText)
    return elementValue;
}
function setTextElementValueById(elementId,value){
    const element = document.getElementById(elementId)
    element.innerText = value
}
function gameOver(){
    hideElementById('play-ground')
    showElementById('final-stage')
    const lastScore = getTextElementValueById('current-score')
    setTextElementValueById('last-score',lastScore)
    //clear the last selected alphabet highlight
    const currentAlphabet = getTextElementById('current-alphabet')
    
}
function getTextElementById(elementId){
    const element = document.getElementById(elementId)
    const elementText = element.innerText
    return elementText;
}
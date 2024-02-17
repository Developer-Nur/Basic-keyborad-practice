// step five keyboard handelling 
function handellingKeyboard (event){ //event is the dafult paramiter here
    const prayerPressed = event.key //what a player pressed
    
    //last step 10, if the player press the 'ESC' stop the game.
    if(prayerPressed === 'Escape'){
        gameOver()
    }

    //get the returned alphabets input from
    const currentAlphabetElements = document.getElementById('current-alpha-container');
    const currentAlphabet = currentAlphabetElements.innerText;
    const expetedAlphabet = currentAlphabet.toLocaleLowerCase();
    if(prayerPressed === expetedAlphabet){
        //step 6, update score
        // sub step 1, get the current score
        const currentScore = getElementValueById('current-score-element')
        //sub step 2, increase the current score
        const updatedScore = currentScore + 1;
        //sub step 3, show the updated score.
        setElementValueById('current-score-element', updatedScore)

        // -----------------------------------------------
        //another ways
        // sub step 1, get the current score
        // const currentScoreElement = document.getElementById('current-score-element');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText)
        

        // //sub step 2, increase the current score
        // const newScore = currentScore + 1;

        // //sub step 3, show the updated score.
        // currentScoreElement.innerText = newScore;
        // console.log(currentScoreElement);

        //step five remove bg of the key
        removebg(expetedAlphabet)
        continueGame() // to repeat or continew
    }
    else{
        //step 7, update live chances
        //sub step 1, get the current live
        const liveChances = getElementValueById('live-chances')
        //sub step 2, decrease the current live chances
        const currnetLives = liveChances - 1;
        //sub step 3, update the current live chances
        setElementValueById('live-chances', currnetLives);

         // -----------------------------------
        //sub step 1, get the current live
        // const currentLiveElement = document.getElementById('live-chances');
        // const currentLiveText = currentLiveElement.innerText;
        // const currentLives = parseInt(currentLiveText);

        // //sub step 2, decrease the current live chances
        // const newLive = currentLives - 1;

        // //sub step 3, update the current live chances
        // currentLiveElement.innerText = newLive;

        //step 7
        if(currnetLives === 0){
            gameOver()
        }

    }

}
//capture key press
document.addEventListener('keyup', handellingKeyboard)

// step four, add the alpha to the dom element
function continueGame(){
    const alphabets = getRandomAlphabet();
   const currentAlpha = document.getElementById('current-alpha-container')
   currentAlpha.innerText = alphabets;
   setbg(alphabets)


}

//part of step one
function play(){
    hideElement('alpha-home')
    //part of step 8
    hideElement('typing-score')
    showElement('play-ground')



    //step 8 replay, set live by 5 defolt & remove bg to reset the game.
    setElementValueById('live-chances', 5)
    setElementValueById('current-score-element', 0)
    
    continueGame()
}

//part of step 7
function gameOver(){
    const sectionOver = hideElement('play-ground');
    const scorePage = showElement('typing-score');

    const lastScore = getElementValueById('current-score-element');
    setElementValueById('player-score', lastScore)

    //part of step 9
    const currentAlphabets = getElementById('current-alpha-container');
    removebg(currentAlphabets)
    
}
//step one hide a section & show another
function hideElement(elementId){
    const hideSection = document.getElementById(elementId)
    hideSection.classList.add('hidden');
}
//show
function showElement(elementId){
    const showSection = document.getElementById(elementId);
    showSection.classList.remove('hidden');
}


// step two, creattion a random alpha string
function getRandomAlphabet(){
    //sub steps

    //step one create a alphabet string
    const alphaBetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphaBets = alphaBetString.split('');
    

    // step two generate a random number as the index on the alphabet string
    const randomNumber = Math.random() *25;
    const index = Math.round(randomNumber);

    // step three, index number, get a single alphbets as per index number.
    const alphabet = alphaBets[index]
    return alphabet;

}

// Step four, add bg to the keyboard
function setbg(keysId){
    const setElementBg = document.getElementById(keysId);
    setElementBg.classList.add('bg-amber-500')
}

function removebg(keysId){
    const setElementBg = document.getElementById(keysId);
    setElementBg.classList.remove('bg-amber-500')
}

//step 6, utility function 1
function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValue = element.innerText;
    const value = parseInt(elementValue);
    return value;
}

//step 6, utility function 2
function setElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value
}


//step 9, removing the bg on keys

function getElementById(elementId){
    const theElement = document.getElementById(elementId);
    const text = theElement.innerText;
    return text;
}


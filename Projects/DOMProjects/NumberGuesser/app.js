//Game Values
let minValue = 1,
    maxValue = 10,
    winningNumber = getRandomWinningNumber(minValue, maxValue),
    guessesLeft = 3;

//UI Elements
const UIgameWrapper = document.querySelector('#game'),
      UIminNum = document.querySelector('.min-num'),
      UImaxNum = document.querySelector('.max-num'),
      UIguessBtn = document.querySelector('#guess-btn'),
      UIguessInput = document.querySelector('#guess-input'),
      UImessage = document.querySelector('.message');

//Assign min and max UI elements
UIminNum.textContent = minValue;
UImaxNum.textContent = maxValue;

//Play again
UIgameWrapper.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
})

//listen for a guess
UIguessBtn.addEventListener('click', function(){
    let guess = parseInt(UIguessInput.value);

    //validate the guess
    if(isNaN(guess) || guess < minValue || guess > maxValue){
        setMessage(`Invalid number! Please enter a number between ${minValue} and ${maxValue}.`, 'red');
    }

    //check if won
    if(guess === winningNumber){
        gameOver(true, `Congrats! You've found the winning number: ${winningNumber}`)

    } else {//wrong guesses
        //wrong guess but continues
        if(guess !== winningNumber){
            guessesLeft--;
            UIguessInput.value = '';
            setMessage(`Wrong guess! You have ${guessesLeft} guesses left.`, '#DC8401');

            //guesses ended, game lost
            if(guessesLeft === 0){
            gameOver(false, `You ran out of guesses, the winning number was: ${winningNumber}`);
            }
        }
    }
});

//check game over if won or lost, sets color to border and disables btn interaction
function gameOver(won, msg){
    let color;
    won === true ? color = 'green' : color = 'red';
    
    //disable guess btn
    UIguessInput.disabled = true;
    //change border color
    UIguessInput.style.borderColor = color;
    //set color message
    UImessage.style.color = color;

    setMessage(msg);

    UIguessBtn.value = 'Play again';
    UIguessBtn.className += 'play-again';
}

function getRandomWinningNumber(min, max){
    return Math.floor(Math.random()*(max - min + 1)+ min);
}

//function to set messages and color according to right or wrong
function setMessage(msg, color){
    UImessage.style.color = color;
    UImessage.textContent = msg;
}
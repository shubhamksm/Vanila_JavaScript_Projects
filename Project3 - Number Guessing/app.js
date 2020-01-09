//Game Values 
let min = 1,
    max = 10,
    winningNum = getRandomNumber(min, max),
    guessesLeft = 3;

//UI Elements
const game = document.getElementById('game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.getElementById('guess-btn'),
      guessInput = document.getElementById('guess-input'),
      message = document.querySelector('.message');

//Assign UI Min and Max
minNum.textContent = min;
maxNum.textContent = max;

//Listen for Guess
guessBtn.addEventListener('click', function(){
    if(guessBtn.value === 'submit'){
        gameOn();
    }
    else{
        location.reload();
    }
})

//Game On
function gameOn(){
    let guess = parseInt(guessInput.value);
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please Enter a Number Between ${min} and ${max}`, 'red');
    }

    if(guess === winningNum){

        //Set Message
        setMessage(`${winningNum} is correct, You Won!!!!!!`, 'green');
        //call Play Again
        playAgain('green');
    } else {
        guessesLeft -= 1;
        if(guessesLeft === 0){
            setMessage(`Sorry You have lost the Game!!`,'red');
            playAgain('red');
        } else {
            if(guess > winningNum){
                setMessage(`You are above! ${guessesLeft} guesses left!`, 'red');
            }
            else {
                setMessage(`You are below! ${guessesLeft} guesses left!`, 'red');
            }
        }
    }
}

//set Message Function
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}

function playAgain(color){
    //disable input
    guessInput.disabled = true;
    //set border color
    guessInput.style.borderColor = color;
    guessBtn.value = 'Play Again';

}

function getRandomNumber(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
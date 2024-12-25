let random=parseInt(Math.random()*100+1)
console.log(random)
const submit=document.querySelector('#subt')
const userinput=document.querySelector('#guessField')
const previousinput=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const loworhi=document.querySelector('.lowOrHi')
const startover=document.querySelector('.resultParas')
const p=document.createElement('p')

let prevguess=[]
let numguess=1
let playgame=true

if(playgame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess =parseInt(userinput.value)
        Validateguess(guess)
    })
}

function Validateguess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }
    else if(guess<1){
        alert('Please enter a number more than 1')
    }
    else if(guess>100){
        alert('Please enter a number less than 100')
    }
    else{
        prevguess.push(guess)
        if(numguess === 11){
            
            displaymessage(`Game over . Random number was ${random}`)
            endgame()
            
        }
        else{
            displayguess(guess)
            checkguess(guess)
        }
    }
   
}

function checkguess(guess){
    if(guess === random){
        displaymessage('You guessed it right')
        endgame()
    }
    else if(guess<random){
        displaymessage('guess is low')
    }
    else if(guess>random){
        displaymessage('guess is high')
    }

}

function displayguess(guess){
    userinput.value = ''
    previousinput.innerHTML += `${guess}, `
    numguess++
    remaining.innerHTML=`${11-numguess}`
    
}

function displaymessage(message){
    loworhi.innerHTML=`<h2>${message}</h2>`
}

function endgame(){
    userinput.value=''
    userinput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newgame"> Start again</h2>`
    startover.appendChild(p)
    playgame=false
    newgame()
}

function newgame(){
    const newGamebutton=document.querySelector('#newgame')
    newGamebutton.addEventListener('click',function(e){
        random=parseInt(Math.random()*100+1)
        prevguess=[]
        numguess=1
        previousinput.innerHTML=''
        remaining.innerHTML='10'
        userinput.removeAttribute('disabled','')
        startover.removeChild(p)
        displaymessage("")
        playgame=true
        
    })
}


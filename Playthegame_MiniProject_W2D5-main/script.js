let gameRounds = 0

function playTheGame(){
    
    console.log(gameRounds)
    if (gameRounds>3){
        return alert(`I am sorry you ran out of rounds goodbye!!!`)
    }
    let play = confirm("Would you like to play the game?")
    
    if (!play){
        alert("ok Have a good day")
    }  else{ 
        alert("lets party")
        let num = prompt("please pick a number between 0 and 10")
        if (isNaN(num)){
            alert("you didnt enter a number!!! Goodbye!")
            return 
        }else if(num > 10){
            alert("The number you enter is greater than 0-10. Goodbye")
        } else{
            let computerNumber = Math.floor(Math.random() * 11);
            test(num,computerNumber)
        }
    }
}

function test(num, computerNumber){

    gameRounds++
    if (gameRounds>3){
        return alert(`I am sorry you ran out of rounds goodbye!!!`)
    }
    if(num==computerNumber){
        
        console.log(gameRounds)
        gameRounds === 0
        console.log(gameRounds)
        return alert(`WINNER!! your number was ${num}. and the computer number was ${computerNumber}. great job!!`)
    } 
    let clue = num > computerNumber? "bigger" : "smaller"; 
    alert(`${num} is ${clue} then the computer’s, guess again`)
    return test(parseInt(prompt("New guess!")),computerNumber)


}



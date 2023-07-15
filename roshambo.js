appendElements () 
scoreboard (0, 0, 'To be Determined', 'Funny words will go here')

  function appendElements () {
    const body = document.body
    const div = document.createElement('div')
    const div2 = document.createElement('div')
    body.append(div)
    body.append(div2)
    div.setAttribute('style','margin-bottom:20px') 
    

    const rock = document.createElement ('button')
    const paper = document.createElement ('button')
    const scissors = document.createElement ('button')


    div.textContent = 'Roshambo Earth'
    rock.textContent = 'rock'
    paper.textContent= 'paper'
    scissors.textContent= 'scissors'

    div2.append(rock)
    div2.appendChild(paper)
    div2.appendChild(scissors)

    

     getPlayerChoice()
  } 

  

  //setTimeout(function(){scoreboard()}, 2500) // worth understanding cb func

  function scoreboard (pText, cText, sitchText, flavorText) {
    let scoreboard= document.querySelector ('div')
    const player = document.createElement('div')
    const computer = document.createElement('div')
    const sitch = document.createElement('div')
    const flavor = document.createElement('div')
    scoreboard.appendChild(player)
    scoreboard.appendChild(computer)
    scoreboard.appendChild(sitch)
    scoreboard.appendChild(flavor)

    player.textContent = 'Player Selection: ' + pText
    computer.textContent = 'Computer Selection: '  + cText
    sitch.textContent = sitchText
    flavor.textContent = flavorText

  }

  function playRound(playerSelection, computerSelection) {
    // PLAN:find out how to clear the DOM stuff as it keeps stacking
    
    
            if (computerSelection === 'rock') {
                if (playerSelection === 'scissors'){
                    //alert ('Computer: Rock | You: Scissors | YOU LOSE')
                    battle (playerSelection, computerSelection, 'YOU LOSE', 'Try as you might the scissors snaps in two')
                    return false;
                } else if (playerSelection === 'paper'){
                    //alert ('Computer: Rock | You: Paper | YOU WIN')
                    battle (playerSelection, computerSelection, 'YOU WIN', 'Paper hugs rock, love wins')
                    return true;
                }
            }  else if (computerSelection === 'paper') {
                if (playerSelection === 'rock'){
                    //alert ('Computer: Paper | You: Rock | YOU LOSE')
                    battle (playerSelection, computerSelection, 'YOU LOSE', 'ROCK NO LIKE PERSONAL SPACE INVADED, ROCK NO COMFORTABLE') 
                    return false;
                } else if (playerSelection === 'scissors'){
                    //alert ('Computer: Paper | You: Scissors | YOU WIN')
                    battle (playerSelection, computerSelection, 'YOU WIN', 'Cutting is fun')
                    return true;
                }
            } else  if (computerSelection === 'scissors'){
                if (playerSelection === 'paper'){
                    //alert ('Computer: Scissors | You: Paper | YOU LOSE')
                    battle (playerSelection, computerSelection, 'YOU LOSE', 'Who knew, scissors can cut through paper')
                    return false;
                } else if (playerSelection === 'rock'){
                    //alert ('Computer: Scissors | You: Rock | YOU WIN')
                    battle (playerSelection, computerSelection, 'YOU WIN', 'ROCK SMASH')
                    return true;
                }
            } 
            if (computerSelection === playerSelection) {
                //alert ('YOU BOTH PICKED THE SAME | TIE') 
                battle (playerSelection, computerSelection, 'It\'s a tie.', 'How awkward, ah well lets try again')
                tieRound()     
            } 
        }
//may need to edit playRound

    function tieRound(){
        return true
    }

    function battle (pSelect, cSelect, victor, flavor) {
        
        scoreboard (pSelect, cSelect, victor, flavor)
    }

    function game (playerScore, computerScore){
        //game logic needs to be worked on 
        for (let i = 0; i < 5; i++){ 
            if (i < 5){
                let roundCheck = playRound(getPlayerChoice, getComputerChoice) 
                if (roundCheck===true) {playerScore++}
                if (roundCheck===false) {computerScore++}
            
                console.log(`round `+ (i +1))
        }else if (i === 5){
        endGame (playerScore,computerScore)
    }
    } //the logic of this is still flawed
    } 

    function endGame(playerScore,computerScore) {
        if (playerScore > computerScore){
            console.log('win')
            }else if (playerScore < computerScore){
            console.log('lose')
            }else if (playerScore === computerScore){
            console.log('tie')
            }
        
    } 




    function getPlayerChoice () {
        let buttons = document.querySelectorAll('button')

        buttons.forEach((button)=>{
            button.addEventListener ('click', (e) => {
            return playRound((e.target.innerText),getComputerChoice());
        })
        
        // works because I was able to get the string value using (e.target.innerText)  
    });
    }

    function getComputerChoice () {
        rand = parseInt(Math.floor (Math.random() *3));
        if (rand === 2) return 'rock';
        if (rand === 1) return 'paper';
        if (rand === 0) return 'scissors';
    }


/*  
LEARNINGS
- something must be done with a function in order for code to run 
- if else statements have to be specific if there are layers
- you can pass values via parameters 
*/ 

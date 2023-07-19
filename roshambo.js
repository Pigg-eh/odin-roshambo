appendElements () 
scoreboard ()
// redo game()
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

    
     //getPlayerChoice()
     game(0, 0)
  } 

  

  //setTimeout(function(){scoreboard()}, 2500) // worth understanding cb func

  function scoreboard () {
    let scoreboard= document.querySelector ('div')
    const player = document.createElement('div')
    const computer = document.createElement('div')
    const sitch = document.createElement('div')
    const flavor = document.createElement('div')
    const results = document.createElement('div')
    
    scoreboard.appendChild(player)
    scoreboard.appendChild(computer)
    scoreboard.appendChild(sitch)
    scoreboard.appendChild(flavor)
    scoreboard.appendChild(results)

    player.classList.add ('player')
    computer.classList.add ('computer')
    sitch.classList.add ('sitch')
    flavor.classList.add ('flavor')
    results.classList.add ('results')

    player.textContent = 'Player Selection: '
    computer.textContent = 'Computer Selection: '
    sitch.textContent = 'Begin by pressing the button'
    flavor.textContent = 'Things must be done'
    results.textContent = '0 - 0'

  }

  function battle (pText, cText, sitchText, flavorText){
    
    let player = document.querySelector('div.player')
    let computer = document.querySelector('div.computer')
    let sitch = document.querySelector('div.sitch')
    let flavor = document.querySelector('div.flavor')
    

    player.textContent = 'Player Selection: ' + pText
    computer.textContent = 'Computer Selection: '  + cText
    sitch.textContent = sitchText
    flavor.textContent = flavorText
    
  }

  function scoreTotal (player, computer) {
    let results = document.querySelector('div.results')
    results.textContent = `Player: ` + player + ` - ` `Computer: ` + computer
  } // to display score

  function playRound(playerSelection, computerSelection) {
    // PLAN:Find out how to clear the DOM stuff as it keeps stacking
    // was able so solbe problem by using query selectors in other functions and adding classes to better target things
    
            if (computerSelection === 'rock') {
                if (playerSelection === 'scissors'){
                  
                    battle (playerSelection, computerSelection, 'YOU LOSE', 'Try as you might the scissors snaps in two')
                    return false;
                } else if (playerSelection === 'paper'){
                  
                    battle (playerSelection, computerSelection, 'YOU WIN', 'Paper hugs rock, love wins')
                    return true;
                }
            }  else if (computerSelection === 'paper') {
                if (playerSelection === 'rock'){
                   
                    battle (playerSelection, computerSelection, 'YOU LOSE', 'ROCK NO LIKE PERSONAL SPACE INVADED, ROCK NO COMFORTABLE') 
                    return false;
                } else if (playerSelection === 'scissors'){
                   
                    battle (playerSelection, computerSelection, 'YOU WIN', 'Cutting is fun')
                    return true;
                }
            } else  if (computerSelection === 'scissors'){
                if (playerSelection === 'paper'){
                  
                    battle (playerSelection, computerSelection, 'YOU LOSE', 'Who knew, scissors can cut through paper')
                    return false;
                } else if (playerSelection === 'rock'){
                   
                    battle (playerSelection, computerSelection, 'YOU WIN', 'ROCK SMASH')
                    return true;
                }
            } 
            if (computerSelection === playerSelection) {
               
                battle (playerSelection, computerSelection, 'It\'s a tie.', 'How awkward, ah well lets try again')
                tieRound()     
            } 
        }

    function tieRound(){
        return true
    }

    function game (playerScore, computerScore){
        //PROBLEM: Game function keeps running and not waiting for the other two functions to finish

        for (let i = 0; i < 5; i++){ 
            if (i < 5){
                playRound (getPlayerChoice(), getComputerChoice())
                let roundCheck = (getPlayerChoice > getComputerChoice) 
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
        //PROBLEM: not getting string value, just loops through buttons
        let buttons = document.querySelectorAll('button')
    
        buttons.forEach((button)=>{
            button.addEventListener ('click', (e) => {
            return playRound((e.target.innerText),getComputerChoice());
            //return (e.target.innerText);
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

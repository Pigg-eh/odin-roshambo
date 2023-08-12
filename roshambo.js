let pointsPlayer = 0 
let pointsComputer = 0
let rounds = 1

appendElements () 
scoreboard ()
getPlayerChoice()
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
    div2.classList.add ('btnDiv')

  } 

  
  function scoreboard () {
    
    let scoreboard= document.querySelector ('div')
    const player = document.createElement('div')
    const computer = document.createElement('div')
    const sitch = document.createElement('div')
    const flavor = document.createElement('div')
    const results = document.createElement('div')
    const rounds = document.createElement ('div')
    
    scoreboard.appendChild(player)
    scoreboard.appendChild(computer)
    scoreboard.appendChild(sitch)
    scoreboard.appendChild(flavor)
    scoreboard.appendChild(results)
    scoreboard.appendChild(rounds)

    player.classList.add ('player')
    computer.classList.add ('computer')
    sitch.classList.add ('sitch')
    flavor.classList.add ('flavor')
    results.classList.add ('results')
    rounds.classList.add ('rounds')

    player.textContent = 'Player Selection: '
    computer.textContent = 'Computer Selection: '
    sitch.textContent = 'Begin by pressing the button'
    flavor.textContent = 'Things must be done'
    results.textContent = '0 - 0'
    rounds.textContent = `Round: 0`

    //i suspect its not getting called in every iteration
  }

  function battle (pText, cText, sitchText, flavorText, ){
    
    let player = document.querySelector('div.player')
    let computer = document.querySelector('div.computer')
    let sitch = document.querySelector('div.sitch')
    let flavor = document.querySelector('div.flavor')
    
    
    player.textContent = 'Player Selection: ' + pText
    computer.textContent = 'Computer Selection: '  + cText
    sitch.textContent = sitchText
    flavor.textContent = flavorText

  }

  function scoreTotal() {
    let results = document.querySelector('div.results')
    let roundo= document.querySelector ('div.rounds')
    results.textContent = `Player: ${pointsPlayer} - Computer: ${pointsComputer}`
    roundo.textContent = (`Round: ${rounds}`)
    rounds ++
  } 



  function playRound(playerSelection, computerSelection) {
    // PLAN:Find out how to clear the DOM stuff as it keeps stacking
    // was able so solve problem by using query selectors in other functions and adding classes to better target things
    
            //Arrayify me
            //[0 1 2]
            //[1 2 0]
            //[2 1 0]
            
            if (computerSelection === 'rock') {
                if (playerSelection === 'scissors'){
                    pointsComputer ++
                    battle (playerSelection, computerSelection, 'YOU LOSE', 'Try as you might the scissors snaps in two')
                    
                } else if (playerSelection === 'paper'){
                    pointsPlayer ++
                    battle (playerSelection, computerSelection, 'YOU WIN', 'Paper hugs rock, love wins')

                }
            }  else if (computerSelection === 'paper') {
                if (playerSelection === 'rock'){
                    pointsComputer ++
                    battle (playerSelection, computerSelection, 'YOU LOSE', 'ROCK NO LIKE PERSONAL SPACE INVADED, ROCK NO COMFORTABLE') 
                 
                } else if (playerSelection === 'scissors'){
                    pointsPlayer ++
                    battle (playerSelection, computerSelection, 'YOU WIN', 'Cutting is fun', true)
                    
                }
            } else  if (computerSelection === 'scissors'){
                if (playerSelection === 'paper'){
                    pointsComputer ++
                    battle (playerSelection, computerSelection, 'YOU LOSE', 'Who knew, scissors can cut through paper')

                } else if (playerSelection === 'rock'){
                    pointsPlayer ++
                    battle (playerSelection, computerSelection, 'YOU WIN', 'ROCK SMASH SILLY TOOL')
                    
                }
            } 
            if (computerSelection === playerSelection) {
               
                battle (playerSelection, computerSelection, 'It\'s a tie.', 'How awkward, ah well lets try again')
                tieRound()     
            } 

            scoreTotal(pointsPlayer, pointsComputer, rounds)
    }

    function tieRound(){
        //maybe make this a variable?
        return true
        }

    function game(playerSelection, computerSelection){
        /*PROBLEM:
        -arguments keep incrementing at seemingly random
        -endgame wont play
        
        WHAT DO:
        []play till someone reaches 5
        [X]keep score of playerScore and computerScore
        display it on the dom 
        */        

        if (pointsPlayer === 5){
            endGame(pointsPlayer, pointsComputer)
        }else if (pointsComputer === 5) {
            endGame(pointsPlayer, pointsComputer)
        }else{
            playRound(playerSelection, computerSelection)
        }

        

    } 

    function endGame(playerScore, computerScore) {
        if (playerScore > computerScore){
            battle ('Player: Win', "Computer: Lose")
            //console.log('win')
            }else if (playerScore < computerScore){
            battle ('Player: Win', "Computer: Lose")
            //console.log('lose')
            }else if (playerScore === computerScore){
            console.log('tie')
            }
        
    } 
    
     function getPlayerChoice () {
        //PROBLEM: not getting string value, just loops through buttons
        // works because I was able to get the string value using (e.target.innerText)  
        //PROBLEM: not waiting for click == async functions and promises
        const buttons = document.querySelector('div.btnDiv')
        
            buttons.addEventListener ('click',  (e) => {
            
            
            game(e.target.innerText, getComputerChoice())
            
      
        })
    //works the same as before due to bubbling, may have to differentiate div and button clicks 

      
    }

    function getComputerChoice () {
        rand = parseInt(Math.floor (Math.random() *3));
        if (rand === 2) return 'rock';
        if (rand === 1) return 'paper';
        if (rand === 0) return 'scissors';
        
    }


/*  
Reminders:
current save has max call stack error, need to figure out async functions and promises

clear out notes in final version these are just for me when learning

Problem Scope:
Get input
check 5 rounds
get cpu input
compare inputs
display results

LEARNINGS
- something must be done with a function in order for code to run?
- if else statements have to be specific if there are layers
- you can pass values via parameters 
*/ 
 
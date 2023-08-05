let pointsPlayer 
let pointsComputer
let rounds

appendElements () 
scoreboard ()

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
    rounds = 0
    game()

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
    results.textContent = `Player: ${pointsPlayer} - Computer: ${pointsComputer}`
    console.log(`Roundo: ${rounds}`)
    rounds ++
    game()
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
                  
                    battle (playerSelection, computerSelection, 'YOU LOSE', 'Try as you might the scissors snaps in two')
                    pointsComputer ++
                    return false;
                    
                } else if (playerSelection === 'paper'){
                  
                    battle (playerSelection, computerSelection, 'YOU WIN', 'Paper hugs rock, love wins')
                    pointsPlayer ++
                    return true;

                }
            }  else if (computerSelection === 'paper') {
                if (playerSelection === 'rock'){
                   
                    battle (playerSelection, computerSelection, 'YOU LOSE', 'ROCK NO LIKE PERSONAL SPACE INVADED, ROCK NO COMFORTABLE') 
                    pointsComputer ++
                    return false;
                    
                } else if (playerSelection === 'scissors'){
                   
                    battle (playerSelection, computerSelection, 'YOU WIN', 'Cutting is fun', true)
                    pointsPlayer ++
                    return true;
                }
            } else  if (computerSelection === 'scissors'){
                if (playerSelection === 'paper'){
                  
                    battle (playerSelection, computerSelection, 'YOU LOSE', 'Who knew, scissors can cut through paper')
                    pointsComputer ++
                    return false;

                } else if (playerSelection === 'rock'){
                   
                    battle (playerSelection, computerSelection, 'YOU WIN', 'ROCK SMASH SILLY TOOL')
                    pointsPlayer ++
                    return true;
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

    function game(){
        /*PROBLEM:
        -arguments keep incrementing at seemingly random
        -endgame wont play
        
        WHAT DO:
        []play till someone reaches 5
        [X]keep score of playerScore and computerScore
        display it on the dom 
        */


        if (rounds === 0){
            pointsPlayer = 0
            pointsComputer = 0
        }
        if (pointsPlayer < 5 || pointsComputer < 5){
            playRound(getPlayerChoice(), getComputerChoice())
        }else if (pointsPlayer === 5){
            endGame(pointsPlayer, pointsComputer)
        }else if (pointsComputer === 5) {
            endGame(pointsPlayer, pointsComputer)
        }

        

    } 

    function endGame(playerScore, computerScore) {
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
        // works because I was able to get the string value using (e.target.innerText)  
        //PROBLEM: not waiting for click == async functions and promises
        const buttons = document.querySelector('div.btnDiv')
        
            buttons.addEventListener ('click',  (e) => {
            
            return e.target.innerText
      
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

LEARNINGS
- something must be done with a function in order for code to run?
- if else statements have to be specific if there are layers
- you can pass values via parameters 
*/ 
 
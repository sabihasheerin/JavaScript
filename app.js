



const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissor = document.querySelector('#scissor')
const board = document.querySelector("#board")


const handler = (e) => {
    const action = e.target.id
    
    switch (action) {
      case "rock":
          board.innerHTML = "Rock crushes scissors"
      case 'paper':
         board.innerHTML = "Paper traps Rock"
      case 'scissor':
          board.innerHTML = "Scissor cuts paper"
          break 
          default:
            board.innerHTML = "click something"
}
}



rock.addEventListener('click', handler)
paper.addEventListener('click', handler)
scissor.addEventListener('click', handler)



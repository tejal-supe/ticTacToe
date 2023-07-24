const PLAYER_TOKEN = 'x'
const COMPUTER_TOKEN = 'o'

$(document).ready(function(){
  const grid = [
    [' ',' ',' '],
    [' ',' ',' '],
    [' ',' ',' ']
  ]  

  function isGameOver() {
    //check horizontal

    for (var i = 0; i < 3; i++){
      if (grid[i][0] !== ' ' && grid[i][0] == grid[i][1] && grid[i][0] == grid[i][2]) {
        return grid[i][0]
      }
    }
  

    //check vertical

     for (var j = 0; j < 3; j++){
      if (grid[0][j] !== ' ' && grid[0][j] == grid[1][j] && grid[0][j] == grid[2][j]) {
        return grid[0][j]
      }
    }
    //check diagonal - top left bottom right

    if (grid[0][0] !== ' ' && grid[0][0] == grid[1][1] && grid[0][0] == grid[2][2]) {
      return grid[0][0]
    }

    //check diagonal - bottom left top right
     if (grid[2][0] !== ' ' && grid[2][0] == grid[1][1] && grid[2][0] == grid[0][2]) {
      return grid[2][0]
    }


    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) { 
        if (grid[i][j] == ' ') {
          return false;
          }
      }
      
    }
    return null
  }

  function moveAI() {
  
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) { 
        if (grid[i][j] == ' ') {
          return {i,j};
          }
      }
      
    }
  }
  

  $('.col').click(function(){
    $(this).html(PLAYER_TOKEN);
    const i =$(this).data("i");
    const j =$(this).data("j");
    grid[i][j] = PLAYER_TOKEN;

    let gameOver = isGameOver()
    if (gameOver) {
      alert("Game over!!" + gameOver + "won the game!!")
      return;
    }
    else {
      const move = moveAI()
      grid[move.i][move.j] = COMPUTER_TOKEN;
      $('.col[data-i=' + move.i + '][data-j='+move.j + ']').html(COMPUTER_TOKEN)
      
    }
    gameOver = isGameOver()
    if (gameOver) {
       alert("Game over!!" + gameOver + "won the game!!")
    }

  })

  $('#restart').click(function () {
     for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) { 
        grid[i][j] = ' '
        $('.col[data-i=' + i + '][data-j='+j + ']').html(' ')
      }
      
    }
  })
  
})
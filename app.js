const PLAYER_TOKEN = 'X'
const COMPUTER_TOKEN = 'O'

$(document).ready(function(){
  const grid = [
    [' ',' ',' '],
    [' ',' ',' '],
    [' ',' ',' ']
  ]  


  $('.col').click(function(){
    $(this).html(PLAYER_TOKEN);
    const i =$(this).data("i");
    const j =$(this).data("j");
    grid[i][j] = PLAYER_TOKEN;
    console.log(grid)
  })
  
})
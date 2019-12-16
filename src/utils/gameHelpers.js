export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, 'clear'])
  )

//Collision Detection - Iterate through current tetro and check if any cell collides with cell in playfield
export const checkCollision = (player, stage, {x: moveX, y: moveY}) => {
  for (let y = 0; y < player.tetromino.length; y+= 1) {
    for (let x = 0; x < player.tetromino[y].length; x += 1) {
    
      if(player.tetromino[y][x] !== 0) {
        if (
          //Movement inside stage y dimensions
          !stage[y + player.pos.y + moveY] ||
          //Movement inside game x dimensions
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          //Check if cell isn't 'clear'
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== 'clear'
        ) {
          return true;
        }
      }
    }
  }
}
import React, { useState } from 'react';
import { createStage } from '../utils/gameHelpers';

//Styled Components
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';

// Main Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

//Hooks
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';

 
const Tetris = () => {
  
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer] = usePlayer();
  const [stage, setStage] = useStage(player);

  //Horizontal movement
  const movePlayer = (dir) => {
    updatePlayerPos({ x: dir, y: 0 })
  }

  const startGame = () => {
    //Reset everything
    setStage(createStage());
    resetPlayer();
  }

  const drop = () => {
    updatePlayerPos({x: 0, y: 1, collided: false})
  }

  const dropPlayer = () => {
    drop();
  }
 
  const move = ({ keyCode }) => {
    if (!gameOver) {
      //Left arrow
      if (keyCode === 37)  {
        movePlayer(-1);
      //Right arrow
      } else if (keyCode === 39) {
        movePlayer(1);
      //Down arrow
      } else if (keyCode === 40) {
        dropPlayer();
      }

    }
  }

  return (
    //Wrapper allows us to register keypresses even if they're outside Tetris game
    <StyledTetrisWrapper role="button" tabIndex = "0" onKeyDown={e => move(e)}>
      <div className="title-wrapper"><h1 className="title">Vinny's React Tetris</h1></div>
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
          <div>
            <Display text="Score" />
            <Display text="Rows" />
            <Display text="Level" />
          </div>
          )}
          <StartButton callback={startGame} />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;

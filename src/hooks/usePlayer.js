import { useState, useCallback } from 'react';
import { TETROMINOS, randomTetromino } from '../utils/tetrominos'
import { STAGE_WIDTH, checkCollision } from '../utils/gameHelpers';

export const usePlayer = () => {
    //useState returns [player, setPlayer]
    const [player, setPlayer] = useState({
        pos: { x: 0, y: 0 },
        tetromino: TETROMINOS[0].shape,
        collided: false,
    })

    const rotate = (tetro, dir) => {
        
        //Transpose rows to cols
        const rotated = tetro.map((_, i) => 
            tetro.map(col => col[i])
        );

        //Reverse rows
        if (dir > 0) return rotated.map(row => row.reverse());
        return rotated.reverse();
    };

    const playerRotate = (stage, dir) => {
        //Copy player so that we do not mutate current player in state
        const playerPointer = JSON.parse(JSON.stringify(player));
        playerPointer.tetromino = rotate(playerPointer.tetromino, dir);
        
        const pos = playerPointer.pos.x;
        let offset = 1;
        
        //Preemptively moves tetro back and forth and checks if rotation triggers collision
        while(checkCollision(playerPointer, stage, { x: 0, y: 0 })) {
            playerPointer.pos.x += offset;
            offset = -(offset + (offset > 0 ? 1 : -1));
            if (offset > playerPointer.tetromino[0].length) {
                rotate(playerPointer.tetromino, -dir);
                playerPointer.pos.x = pos;
                return;
            }
        }

        setPlayer(playerPointer);
    }

    const updatePlayerPos = ({ x, y, collided }) => {
        setPlayer(prev => ({
            ...prev,
            pos: { x: (prev.pos.x += x), y: (prev.pos.y += y)},
            collided,
        }))
    }

    //useCallback hook is used to avoid nonterminating loop
    const resetPlayer = useCallback(() => {
        setPlayer ({
            pos: { x: STAGE_WIDTH / 2 - 2, y: 0},
            tetromino: randomTetromino().shape,
            collided: false
        })
    }, [])

    return [player, updatePlayerPos, resetPlayer, playerRotate];
}
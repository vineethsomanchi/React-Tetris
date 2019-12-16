import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { TETROMINOS } from '../utils/tetrominos';

const Cell = ({ type }) => (
  <StyledCell type={type} color={TETROMINOS[type].color} />
)

//Memoize all cells so only changed cells are re-rendered
export default React.memo(Cell);
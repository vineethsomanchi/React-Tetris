import styled from 'styled-components';

import bgImage from '../../stylesheets/img/bg.jpg';

export const StyledTetrisWrapper = styled.div` 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
  width: 100vw;
  height: 100vh;
  background: url(${bgImage}) #000;
  background-size: cover;
  overflow: hidden;
`;

export const StyledTetris = styled.div`
  height: 90vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;
  margin: 0 auto;

  aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 20px;
  }
`;

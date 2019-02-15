import React from 'react';
import { playerColors } from "../helpers";
import styled from 'styled-components';

const StyledCell = styled.span`
  width: 50px;
  height: 50px;
  display: inline-block;
  padding: .2em;
  
  span {
    display: inline-block;
    background-color: ${props => playerColors[props.player]};
    min-width: 100%;
    min-height: 100%;
    border-radius: 50px;
    -moz-box-shadow:    inset -1px -1px 2px rgba(0, 0, 0, .4);
    -webkit-box-shadow: inset -1px -1px 2px rgba(0, 0, 0, .4);
    box-shadow:         inset -1px -1px 2px rgba(0, 0, 0, .4);
  }
`;

const Cell = ({ player, onClick, className }) => {
return ( <StyledCell player={player} onClick={onClick}>
    <span className={className}></span>
  </StyledCell>)
};

export default Cell;

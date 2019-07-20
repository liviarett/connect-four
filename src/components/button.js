import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
	color: inherit;
	border: none;
	padding: 1em;
	text-transform: uppercase;
	margin-top: 1em;
	font: inherit;
	cursor: pointer;
	outline: inherit;
	background-color: transparent;
  -webkit-box-shadow: 0px 1px 12px -3px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 5px 22px -13px rgba(0,0,0,0.75);
  box-shadow: 0px 5px 15px -13px rgba(0,0,0,0.75);
	border: 1px solid white;

  &:active {
  	background-color: grey;
  }
`;

const Button = ({ handleClick, text }) => (
  <StyledButton onClick={handleClick}>{text}</StyledButton>
);

export default Button;

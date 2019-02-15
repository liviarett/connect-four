import React from 'react';
import styled from 'styled-components';

const StyledBanner = styled.div`
  position: absolute;
  margin: auto;
  width: 100%;
  background-color: white;
  padding: 3em 0;
  z-index: 1000;
  -webkit-box-shadow: 0px 5px 22px -13px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 5px 22px -13px rgba(0,0,0,0.75);
  box-shadow: 0px 5px 22px -13px rgba(0,0,0,0.75);
  color: ${props => props.textColor};
`;

const Banner = ({ message, textColor }) => (
    <StyledBanner textColor={textColor}><b>{ message }</b></StyledBanner>
);

export default Banner;
